const postgres = require('../config/db')
 function getUser (req, res){
    // res.render('index',{title:'User Viewed',h1:"Company Staff", users})
       
    const query = 'SELECT * FROM MiAmor LIMIT 5'
    postgres.query(query,(err,result)=>{
        if(err) console.log('An error occured');
        else res.send(result.rows);
    
    })
}

 function getUserById (req,res){
    const id=parseInt(req.params.id)
    const query='SELECT * FROM MiAmor where id=$1'
     postgres.query(query,[id],(err,result)=>{
        if(err)  res.status(404).json({message: 'User does not exist'});
        else res.send(result.rows)
    })
}

 function  createUser (req,res){
    const name=req.body.name
    const age=req.body.age

    const query='INSERT INTO MiAmor (name,age) VALUES ($1,$2)'
     postgres.query(query,[name,age],(err,result)=>{
        if(err) console.log('Failed to add user');
        else res.send(result)
    })
    
}

 function  deleteUser (req,res){
    const id=req.params.id
    const query='DELETE FROM MiAmor WHERE id = $1'
     postgres.query(query,[id],(err,result)=>{
        if(err) console.log('Failed to remove user');
        else res.send(result)

    })
 
}

module.exports ={getUser,getUserById,createUser,deleteUser}