const mongoose = require('mongoose');
const _ = require('lodash');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not a valid Email!!!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 20
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            require: true
        }
    }]

});

// custom instance method from mongoose

UserSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email', 'username']);  
};

UserSchema.methods.generateAuthToken = function () {
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
  user.tokens = user.tokens.concat([{access, token}]);
  return user.save().then(() => {
      return token;
  });  
};

UserSchema.methods.removeToken = function (token) {
  let user = this;
  return user.update({
      $pull: {
          tokens: {
              token
          }
      }
  });  
};

// custom static methods from mongoose

UserSchema.statics.findByToken = function (token) {
  let User = this;
  let decoded;
  try {
      decoded = jwt.verify(token, 'abc123');
  } catch (error) {
      return Promise.reject();
  }  

  return User.findOne({
      '_id': decoded._id,
      'tokens.access': 'auth',
      'tokens.token': token
  });
};

UserSchema.statics.findByCredentials = function (email, password) {
  let User = this;
  return User.findOne({email}).then((user) => {
      if (!user) {
          return new Promise.reject();
      }

      return new Promise((resolve, reject) => {
          bcrypt.compare(password, user.password, (err, res) => {
              if (res) {
                  resolve(user);
              } else {
                  reject();
              }
          });
      });
  });  
};


// mongoose 'pre' middleware

UserSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (e, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

let User = mongoose.model('User', UserSchema);

module.exports = {User};