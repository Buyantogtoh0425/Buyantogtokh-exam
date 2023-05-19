const TaskModel = require("../model/ToDoModel")


exports.getList = async (request, response) => {
    try {
      const tasks = await TaskModel.find()
      return response.status(200).json({
        message: true,
        data: tasks                           
      });
    } catch (error) {
      return response.status(200).json({ message: error, data: null });
    }
  };

exports.getCount = async (request, response) => {
    try {
      const tasks = await TaskModel.find()
      return response.status(200).json({
        message: true,
        data: tasks                           
      });
    } catch (error) {
      return response.status(200).json({ message: error, data: null });
    }
  };

exports.createTask = async (request, response) => {
    try {
        const {text} = request.body
        const createTask = await TaskModel.create({
            text: text,
        })
      return response.status(200).json({
        message: true,
        data: createTask                           
      });
    } catch (error) {
      return response.status(200).json({ message: error, data: null });
    }
};

exports.deleteTask = async (request, response) => {
    try {
        const createTask = await TaskModel.deleteOne({_id: id})
      return response.status(200).json({
        message: deleted                        
      });
    } catch (error) {
      return response.status(200).json({ message: error, data: null });
    }
};

exports.updateTask = async (request, response) => {
    try {
        const createTask = await TaskModel.deleteOne({_id: id})
      return response.status(200).json({
        message: deleted                        
      });
    } catch (error) {
      return response.status(200).json({ message: error, data: null });
    }
};

exports.updateIsDone = async (request, response) => {
    try {
        const {id} = request.params
        const done = await TaskModel.updateOne({_id: id}, {isDone : true})
      return response.status(200).json({
        message: deleted,
        data: done                  
      });
    } catch (error) {
      return response.status(200).json({ message: error, data: null });
    }
};



  
