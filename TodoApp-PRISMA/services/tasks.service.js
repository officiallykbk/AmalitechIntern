
const {prisma} = require('../config/db')

const allTasks =  async (title,description,priority,completion_status,due_date,limit,order) => {
            const filters = {};

             if (title) {
               filters.title = { startsWith: title }; 
             }
             if (description) {
               filters.description = { contains: description }; 
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
            // where: {OR:[ Object.keys(filters).length >0 ? filters : undefined ]},
            // orderBy: due_date && order ? {due_date:order} : undefined,
            // take: limit || undefined
        })
        return result
 
    }

const specificTask = async(id) =>{
        const result = await prisma.tasks.findUnique({
         where: { id: Number(id) },
        })
        return result
}


const addTask = async (title,description,due_date,priority) => {
        if (due_date < new Date()) {
           throw new Error("due_dates must be today or later");
        }

        const result =await prisma.tasks.create({
            data: {
                title,description,due_date,priority
            }
        })
        return result
   
} 


const manipulateTask = async({id,title,description,due_date,priority,completion_status}) => {
      
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
   
} 

const changeCompletion = async({id,completion_status}) => {
        const result = await prisma.tasks.update({
            where: { id: Number(id) },
            data: {completion_status}
        })
        return result
    
}

const removeTask = async (id) =>{
        const result = await prisma.tasks.delete({
              where: { id: Number(id) },
        })
        return result
   
}



module.exports = {specificTask,allTasks,addTask,manipulateTask,changeCompletion,removeTask}