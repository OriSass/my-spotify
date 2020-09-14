const express = require('express');
const app = express ();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let mysqlCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
  });

mysqlCon.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/top_:tableName', (req,res)=>{
    let newTable = req.params.tableName
    console.log(newTable)
    mysqlCon.query(`SELECT * FROM ${newTable} LIMIT 20;`,(error, results, fields)=> {
        if (error) {
            res.send (error.message);
            throw error
        };
        res.send(results)
    }) 
})

app.get('/:tableName/:id', (req,res)=>{
    let table = req.params.tableName
    let id = req.params.id
    mysqlCon.query(`SELECT * FROM ${table}s WHERE ${table}.id = ${id};`,(error, results, fields)=> {
        if (error) {
            res.send (error.message);
            throw error
        };
        res.send(results)
    }) 
})

app.post('/:tableName', (req,res) => {
    let table = req.params.tableName;
    let data = req.body;
    console.log(data);
    mysqlCon.query(`INSERT INTO ${table}s SET ?;`,data,(error, results, fields)=> {
        if (error) {
            res.send (error.message);
            throw error;
        };
        res.send(results);
    }) 
})

app.put('/:tableName/:id', (req,res) => {
    let id = req.params.id
    let table = req.params.tableName
    let data = req.body
    console.log(data)
    mysqlCon.query(`UPDATE ${table}s SET ? WHERE ${table}s.id=${id};`,data,(error, results, fields)=> {
        if (error) {
            res.send (error.message);
            throw error
        };
        res.send(results)
    })     
})

app.delete('/:tableName/:id', (req,res) => {
    let id = req.params.id
    let table = req.params.tableName
    mysqlCon.query(`DELETE FROM ${table}s WHERE ${table}s.id=${id};`,(error, results, fields)=> {
        if (error) {
            res.send (error.message);
            throw error
        };
        res.send(results)
    })
})

app.listen(3000);