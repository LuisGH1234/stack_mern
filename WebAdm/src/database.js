const mongoose = require('mongoose');
const URI = 'mongodb+srv://LuisGH1234:7PbvVMncmsE6Ttj@cluster0-yldiz.mongodb.net/test?retryWrites=true';

mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err => console.log('DB: ' + err));

module.exports = mongoose;