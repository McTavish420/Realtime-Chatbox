const moment = require('moment');


let genText = (from, text) => {
    let message = {
        from,
        text,
        createdAt: moment(moment().valueOf()).format('h:mm a')
    };
    return message;
};

module.exports = {genText};