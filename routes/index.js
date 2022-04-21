const express = require('express');
// const { append } = require('express/lib/response');
const router = express.Router();

const homeController = require('../controllers/home_controller');

const addTaskcontroller = require('../controllers/addTask_controller');

const deleteTaskcontroller = require('../controllers/deleteTask_controller');


router.get('/',homeController.home);




router.post('/add-task' , addTaskcontroller.addTask);

router.get('/delete-task' , deleteTaskcontroller.deleteTask)




module.exports = router;