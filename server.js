//setting express
const express = require('express');
const app = express();

//defining port
const port = 3000;

const path = require("path");

//including database
const db = require('./config/mongoose');
const Lists = require('./models/list');

module.exports.todoList = [
    {
        desc : "Study",
        category : "Personal",
        date:26/12/2001,
    }
];


//using parser
app.use(express.urlencoded());

//using middle ware for js and css files
app.use(express.static("assets"));

//setting view engine
app.set('view engine' , 'ejs');
app.set('views' , './views');






//routers always come at end before app listening
app.use('/',require('./routes'));



//listening port
app.listen(port,function(err){
    if(err){
        console.log(`Error in listening port ${port}`);
    }else{
        console.log(`Server up and running at port ${port}`);
    }
});