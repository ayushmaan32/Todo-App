//require express for setting up the server
const express = require('express');
//set up the Port Number
const port = 6000;
//importing the database 
const db = require('./config/mongoose');
//imorting the schema for todo
const Todo = require('./model/todo');



//using exprsss
const app = express();


//make the app listen on assigned port number
app.listen(port,function(err,data){
    if(err){
     console.log(`error in runnig the server: ${err}`);
    }
    console.log(`server is running on port:${port}`)
 
 })
