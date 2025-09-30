const postgres = require('../config/db')

const allTasks = async (title,priority,completion_status,due_date,limit,order) =>{
    try {

        let query = 'SELECT * FROM Tasks WHERE 1=1'
        let values=[]
        let indx=1

        if(title){
            query += ` AND title ILIKE $${indx++}`
            values.push(`${title}%`)
        }
        
        if (priority){
            query += ` AND priority=$${indx++}`
            values.push(priority)
        }
        if (completion_status){
            query += ` AND completion_status=$${indx++}`
            values.push(completion_status)
        }
        if (due_date){
            query += ` AND due_date=$${indx++}`
            values.push(due_date)
        }

        query +=` ORDER BY id ${order} LIMIT ${limit}`
        // console.log(`querzz ${query}\n ${values} \n title ${title}\n priority ${priority}\n complet ${completion_status}\n due ${due_date}\n limi-ord ${limit}-${order}`)
        const result = await postgres.query(query,values)
        return result
    } catch (error) {
        console.error(`Retrieval error ${error.message}`);
        
    } 
}

const specificTask = async (id) =>{
    try {
        format_id=parseInt(id)
        const query = 'SELECT * FROM Tasks WHERE id = $1'
        const result = await postgres.query(query,[format_id])
        return result
    } catch (error) {
        console.error(`Retrieval error: ${error.message}`);
        
    } 
}

const addTask = async (title,description,due_date,priority) => {
    try {
        const query = 'INSERT INTO tasks (title, description, due_date, priority) VALUES ($1, $2, $3, $4) RETURNING *'
        const result = await postgres.query(query,[title,description,due_date,priority])
        return result
    } catch (error) {
        console.error(`Creation error: ${error.message}`)
    }
}

const manipulateTask = async(id,title,description,due_date,priority,completion_status) => {
        try {
        const query = 'UPDATE Tasks set title=$1,description=$2,due_date=$3,priority=$4,completion_status=$5 WHERE id=$6 RETURNING *'
        const result = await postgres.query(query,[title,description,due_date,priority,completion_status,id])
        return result
    } catch (error) {
        console.error(`Edit error: ${error.message}`);  
    } 
} 

const changeCompletion = async(id,completion_status) => {
        try {
        const query = 'UPDATE Tasks set completion_status=$1 WHERE id=$2 RETURNING *'
        const result = await postgres.query(query,[completion_status,id])
        return result
    } catch (error) {
        console.error(`Edit error: ${error.message}`);  
    } 
}

const removeTask = async (id) =>{
    try {
        const query = 'DELETE FROM Tasks WHERE id=$1 RETURNING *'
        const result = await postgres.query(query,[id])
        return result
    } catch (error) {
        console.error(`Deletion error: ${error.message}`)
    }
}



module.exports = {specificTask,allTasks,addTask,manipulateTask,changeCompletion,removeTask}