const postgres = require("../config/db")

async function CreateTable() {
    try {
            const query =
    `CREATE TABLE IF NOT EXISTS MiAmor(
        id SERIAL PRIMARY KEY,
        name VARCHAR(64),
        age INTEGER,
        created_at TIMESTAMP DEFAULT now()
    )`
    await postgres.query(query) 
    } catch (error) {
        console.error(error)
        
    }

    
}
module.exports = CreateTable;