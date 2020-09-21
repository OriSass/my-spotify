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
app.get('/album/:id', (request,response) =>{
    let albumId = request.params.id;
    let sql1 = `CALL get_album(${albumId})`;
    let sql2 = `CALL get_album_artists(${albumId})`;
    let resultsArr = [];
    mysqlCon.query(sql1 ,(error, result1, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        resultsArr.push(result1[0]);
    })
    mysqlCon.query(sql2 ,(error, result2, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        resultsArr.push(result2[0]);
    })
    response.send(resultsArr);
})
// you can divide it to 2 procedures so data doesnt duplicate
app.get('/playlist/:id', (request,response) =>{
    let playlistId = request.params.id;
    let sql = `CALL get_playlist(${playlistId})`;
    mysqlCon.query(sql ,(error, results, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        response.send(results[0]);
    }) 
});
app.get('/top_:tableName', (request,response)=>{
    let table = request.params.tableName;
    let sql = `SELECT * FROM ${table} LIMIT 20;`;
    if(table === 'songs'){
        sql = 'CALL get_top_songs()';
    }
    if(table === 'artists'){
        sql = 'CALL get_top_artists()';
    }
    if(table === 'albums'){
        sql = 'CALL get_top_albums()';
    }
    if(table === 'playlists'){
        sql = 'CALL get_top_playlists()';
    }
    mysqlCon.query(sql ,(error, results, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        response.send(results[0]);
    }) 
});

app.get('/:tableName/:id', (request,response)=>{
    let table = request.params.tableName
    let id = request.params.id
    mysqlCon.query(`SELECT * FROM ${table}s WHERE ${table}.id = ${id};`,(error, results, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        response.send(results)
    }) 
})

app.post('/:tableName', (request,response) => {
    let table = request.params.tableName;
    let data = request.body;
    //console.log(data);
    mysqlCon.query(`INSERT INTO ${table}s SET ?;`,data,(error, results, fields)=> {
        if (error) {
            response.send (error.message);
            throw error;
        };
        response.send(results);
    }) 
})

app.put('/:tableName/:id', (request,response) => {
    let id = request.params.id;
    let table = request.params.tableName;
    let data = request.body;
    mysqlCon.query(`UPDATE ${table}s SET ? WHERE ${table}s.id=${id};`,data,(error, results, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        response.send(results)
    })     
})

app.delete('/:tableName/:id', (request,response) => {
    let id = request.params.id;
    let table = request.params.tableName;
    mysqlCon.query(`DELETE FROM ${table}s WHERE ${table}s.id=${id};`,(error, results, fields)=> {
        if (error) {
            res.send (error.message);
            throw error
        };
        response.send(results)
    })
})

app.listen(8080);