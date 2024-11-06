const mysql = require ('mysql2');
const cors = require ('cors');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"24112002",
    database:"loginsystem"
})

app.post('/register',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users {username,password} VALUES (?,?)",[username, password], (err,result)=>{
        console.log(err.response.data);
    })
})


app.listen(3001, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port");
})