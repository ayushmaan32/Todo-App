//require the mongoose library
const mongoose = require('mongoose');
// connect to the database
mongoose.connect('mongodb://localhost/todo_app');
// acquire the connection to check if it is successful
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error on connectiong to db'));

//up and running print the message
db.once('open',function(){
    console.log('connected to database :: MongoDB');
});
// exporting the database
module.exports = db;