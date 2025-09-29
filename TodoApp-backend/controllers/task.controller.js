const { allTasks, specificTask, addTask, removeTask, manipulateTask, changeCompletion } = require("../services/tasks.service")

//todo: send status for error in fetch

const getTasks = async(req,res) => {
    try {
        const result = await allTasks()
        res.status(200).send(result.rows[0])
    } catch (error) {
        console.error(error)
    }
}

const getTaskById = async (req,res) =>{
    try {
        const id = parseInt(req.params.id)
        const result = await specificTask(id)
        if (result.rowCount==0) return res.status(404).send('Task does not exist')
        res.status(200).send(result.rows[0])
    } catch (error) {
        console.error(error)
    }
}

const createTask  = async (req,res) =>{
    try {
     
        const { title, description, due_date, priority } = req.body;
        
        let formattedDate = null;
        if (due_date) {
            formattedDate = new Date(due_date).toISOString().split('T')[0];
        }
        const result =await addTask(title,description,formattedDate,priority)
        res.status(201).send(result.rows[0])
    } catch (error) {
        console.error(error)
    }
}

const editTask  = async (req,res) =>{
    try {
        const {title,description,due_date,priority,completion_status} = req.body
        const formated_id = parseInt(req.params.id)
        const result =await manipulateTask(formated_id,title,description,due_date,priority,completion_status)
        if (result.rowCount==0) return res.status(404).send('Task does not exist')
        res.send(result.rows[0])
    } catch (error) {
        console.error(error)
    }
}
const editTaskCompletion = async (req,res) =>{
    try {
        const {completion_status} = req.body
        const formated_id = parseInt(req.params.id)
        const result = await changeCompletion(formated_id,completion_status)
        if (result.rowCount==0) return res.status(404).send('Task does not exist')
        res.send(result.rows[0])
    } catch (error) {
        console.error(error)
    }
}

const deleteTask  = async (req,res) =>{
    try {
        const id = parseInt(req.params.id)
        const result = await removeTask(id)
        if (result.rowCount==0) return res.status(404).send('Task does not exist')
        res.status(204).send(result)
        
    } catch (error) {
        console.error(error)
    }
}

// function formatter(req){
//     let new_format=[]
//     for (i in req.body){
//         new_format.push(parseInt(req.body[i]))
//     }
// }



module.exports = {getTasks,getTaskById,deleteTask,createTask,editTask,editTaskCompletion}