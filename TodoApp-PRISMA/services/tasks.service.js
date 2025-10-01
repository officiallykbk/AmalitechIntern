
const prisma = require('../config/db')

const allTasks =  async (title,priority,completion_status,due_date,limit,order) =>{
    try {

            const filters = {};

             if (title) {
               filters.title = { startsWith: title }; 
             }
             if (priority) {
               filters.priority = priority;
             }
             if (completion_status !== undefined) {  
               filters.completion_status = completion_status;
             }
             if (due_date) {
               filters.due_date = new Date(due_date);
             }

        const result = await prisma.tasks.findMany({ 
            // where: {OR:[ Object.keys.length >0 ? filters : undefined ],},
            // orderBy: due_date && order ? {due_date:order} : undefined,
            // take: limit || undefined
        })
        return result
   } catch (error) {
        console.error(`Retrieval error ${error.message}`);
      throw new Error("Failed to fetch task");
        
    } 
}


const specificTask = async(id) =>{
    try {
        const result = await prisma.tasks.findUnique({
         where: { id: Number(id) },
        })
        return result
    } catch (error) {
      throw new Error("Failed to fetch task");
    }
}


const addTask = async (title,description,due_date,priority) => {
    try {
        
        if (due_date < new Date()) {
           throw new Error("due_dates must be today or later");
        }

        const result =await prisma.tasks.create({
            data: {
                title,description,due_date,priority
            }
        })
        return result
    } catch (error) {
        console.error(`Creation error: ${error.message}`)
         throw new Error("Failed to fetch task");
    }
} 


const manipulateTask = async(id,title,description,due_date,priority,completion_status) => {
        try {
            if (due_date < new Date()) {
                throw new Error("due_dates must be today or later");
            }
            console.log( title,description,due_date,priority)
            
        const result = await prisma.tasks.update({
               where: { id: Number(id) },
            data: {
                title,description,due_date,priority,completion_status
            }
        })
        return result
    } catch (error) {
        console.error(`Edit error: ${error.message}`);  
     throw new Error("Failed to fetch task");
    } 
} 

const changeCompletion = async(id,completion_status) => {
        try {
                const result = await prisma.tasks.update({
                    where: { id: Number(id) },
                    data: {completion_status}
                })
        return result
    } catch (error) {
        console.error(`Edit error: ${error.message}`);  
        throw new Error("Failed to fetch task");
    } 
}

const removeTask = async (id) =>{
    try {
        const result = await prisma.tasks.delete({
              where: { id: Number(id) },
        })
        return result
    } catch (error) {
        console.error(`Deletion error: ${error.message}`)
        throw new Error("Failed to fetch task");
    }
}



module.exports = {specificTask,allTasks,addTask,manipulateTask,changeCompletion,removeTask}