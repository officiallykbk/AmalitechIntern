const postgres = require('../config/db')
const createTaskTable = async ()=>{
    try {
        const query = 
    `
        CREATE TYPE priorities AS ENUM ('low', 'medium', 'high');
    
        CREATE TABLE IF NOT EXISTS Tasks(
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            due_date DATE CHECK (due_date >= CURRENT_DATE),
            priority priorities,
            completion_status BOOLEAN DEFAULT false,
    
        );
    `
        const result = await postgres.query(query)   
        console.log(result)
    } catch (error) {
        console.log('Todo Table is not available')
        return error;
    }
}
module.exports=createTaskTable;