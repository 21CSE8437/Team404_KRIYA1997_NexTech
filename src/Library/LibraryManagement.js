var express = require('express');
var router = express.Router()
const db = require('../../mysqlConfig');

router.Route('/').post().get();


const postBOOKS = async(req , res)=>{
    const [title , auther , edition , publisher] = req.body;
    const query = `insert into books values(?,?,?,?)`;
    db.query(query , [title , auther , edition , publisher] , (err , row , fields)=>{
        if(!err) {return res.send("Created successfully");}
        else {return res.send("Failure....")}
    })
}
const getBOOKS = async(req , res)=>{
    const [title ] = req.body;
    const query = `select * from books where title = ?`;
    db.query(query , [title] , (err , row , fields)=>{
        if(!err) {return res.send(row);}
        else {return res.send("Failure....")}
    })
}
const deleteBOOKS = async(req , res)=>{
    const [title , auther , edition , publisher] = req.body;
    const query = `insert into books values(?,?,?,?)`;
    db.query(query , [title , auther , edition , publisher] , (err , row , fields)=>{
        if(!err) {return res.send("Created successfully");}
        else {return res.send("Failure....")}
    })
}