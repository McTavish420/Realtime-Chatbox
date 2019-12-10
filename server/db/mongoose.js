const mongoose = require('mongoose');

const dbURL = 'localhost:27017/Chatbox';

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://MacTavish:TUSAR@142442@devcluster-cybti.mongodb.net/Chatbox?retryWrites=true`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database is connected successfully!!!`);
}).catch((e) => {
    console.log('Database fails to connect due to: ');
    console.log(e.message);
});

module.exports = {mongoose};
