const Lists = require('../models/list');

var server = require('../server.js');
var todoList = server.todoList;
module.exports.deleteTask = function(req,res){
  
     //get the id from the query in the url
     let id = req.query.id;
     
   console.log(id);
     //find the contact in the database using id and delete it
     Lists.findByIdAndDelete(id,function(err){
       if(err){
         console.log("Error in deleting an object from database");
         return;
       }
  
       return res.redirect('back');
     });
}

