const mongoose = require('mongoose');

const dbURL = 'localhost:27017/Chatbox';

mongoose.connect(`mongodb://${dbURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database is connected successfully!!!`);
}).catch((e) => {
    console.log('Database fails to connect due to: ');
    console.log(e.message);
});

module.exports = {mongoose};
