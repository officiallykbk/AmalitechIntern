const pg = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const postgres =new pg.Pool({
  connectionString: process.env.DATABASE_URL,
})
postgres.on('connect',()=>{console.log('DB connected')
})

module.exports=postgres