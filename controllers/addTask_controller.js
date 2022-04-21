const Lists = require('../models/list');
var server = require('../server.js')

var todoList = server.todoList;
module.exports.addTask = function(req,res){
   //for rendering on local server
   //   todoList.push({
   //      desc:req.body.desc,
   //      category:req.body.category,
   //      date:req.body.date,
   // });

   //for creating in db

   Lists.create({
      desc:req.body.desc,
      category:req.body.category,
      date:req.body.date,
   },function(err,newList){
      if(err){
         console.log("Error in creating List");
      }else{
         console.log("*************" , newList);
         // return res.redirect('back');
      }
   });

   return res.redirect('/');
}

