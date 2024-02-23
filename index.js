var express = require('express')
var mysql = require('mysql2')

const app = express()

mysql.createConnection({
    host:"db4free.net",
    user:"naveen1234",
    password:"mr.stark",
    database:"test"
})


app.get('/',()=>{

})


app.listen(()=>{
    console.log("Server Started")
})