const Lists = require('../models/list');
var server = require('../server.js')

var todoList = server.todoList;
module.exports.home = function(req,res){
      //fetching contact from db
      Lists.find({} , function(err,todoList){
        if(err){
          console.log("Error in fetching list from db");
          return;
        }

      return res.render('home',{
         title : "ToDo App",
         todo_List :todoList,

    });
 });
}

