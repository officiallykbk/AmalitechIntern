const { allTasks, specificTask, addTask, removeTask, manipulateTask, changeCompletion } = require("../services/tasks.service")


const getTasks = async(req,res,next) => {
    try {
        space=['ASC','DESC']
        let {title,description,priority,completion_status,due_date,limit=10,order='ASC'}  = req.query
        completion_status =
                completion_status === "true"
              ? true
              : completion_status === "false"
              ? false
              : undefined; 
        space.includes(order) ? order : order='ASC'

        const result = await allTasks({title,description,priority,completion_status,due_date,limit:10,order:'ASC'})
        if (result==null) return res.status(204).send('No task found')
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
}

const getTaskById = async (req,res,next) =>{
    try {
        const id = parseInt(req.params.id)
        const result = await specificTask(id)
        if (result==null) return res.status(404).send('Task does not exist')
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
}

const createTask  = async (req,res,next) =>{
    try {
     
        const { title, description, due_date, priority } = req.body;
        
        let formattedDate = null;
        if (due_date) {
            formattedDate = new Date(due_date).toISOString();
        }
        const result =await addTask(title,description,formattedDate,priority)
        res.status(201).send(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
}

const editTask  = async (req,res,next) =>{
    try {
        const {title,description,due_date,priority,completion_status} = req.body
         completion_status =
    completion_status === "true"
      ? true
      : completion_status === "false"
      ? false
      : undefined; 
        const formated_id = parseInt(req.params.id)
         let formattedDate = null;
        if (due_date) {
            formattedDate = new Date(due_date).toISOString();
        }
        const result =await manipulateTask({formated_id,title,description,formattedDate,priority,completion_status})
        if (result==null) return res.status(404).send('Task does not exist')
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
}
const editTaskCompletion = async (req,res,next) =>{
    try {
        const {completion_status} = req.body
        const formated_id = parseInt(req.params.id)
        const result = await changeCompletion({formated_id,completion_status})
        if (result==null) return res.status(404).send('Task does not exist')
        res.send(result)
    } catch (error) {
        console.error(error)
        next(error)
    }
}

const deleteTask  = async (req,res,next) =>{
    try {
        const id = parseInt(req.params.id)
        const result = await removeTask(id)
        if (result==null) return res.status(404).send('Task does not exist')
        res.status(204).send(result)
        
    } catch (error) {
        console.error(error)
        next(error)
    }
}




module.exports = {getTasks,getTaskById,deleteTask,createTask,editTask,editTaskCompletion}