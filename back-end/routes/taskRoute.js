const express = require("express");
const router = express.Router();

const {
    getList,
    getCount,
    createTask,
    deleteTask,
    // updateTask,
    updateIsDone

} = require("../controller/taskController");
router
    .get('/list',  getList)
    .get('/count', getCount)
    .post('/add', createTask)
    .delete('/delete', deleteTask)
    // .put('/update', updateTask)
    .put('/checked/:id' , updateIsDone )
module.exports = router;