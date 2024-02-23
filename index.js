var express = require('express')
var mysql = require('mysql2')
var cors = require('cors')
var config = require('./mysqlConfig')
const app = express()
var StaffRouter = require('./src/StaffManagement')
var db = mysql.createConnection(config)
db.connect(() => {
    console.log("Mysql Connected")
})
app.use(express.json())
app.use(cors())
app.use(StaffRouter)
app.listen('2000', () => {
    console.log("Listening on port 2000");
})
