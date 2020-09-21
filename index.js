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

app.get('/song/:id', (request,response) =>{
    let songId = request.params.id;
    let sql = `call music.get_song(${songId})`;
    mysqlCon.query(sql ,(error, result, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        }
        response.send(result);
    });   
})
app.get('/artist/:id', (request,response) =>{
    let artistId = request.params.id;
    let sql1 = `call music.get_artist(${artistId})`;
    let sql2 = `CALL music.get_artist_albums(${artistId})`;
    let sql3 = `CALL music.get_artist_selected_songs(${artistId})`;
    mysqlCon.query(`${sql1}; ${sql2}; ${sql3}` ,(error, result, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        }
        response.send(result);
    });   
})
app.get('/album/:id', (request,response) =>{
    let albumId = request.params.id;
    let sql1 = `CALL get_album(${albumId})`;
    let sql2 = `CALL get_album_artists(${albumId})`;
    mysqlCon.query(`${sql1}; ${sql2}` ,(error, result, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        }
        response.send(result);
    });   
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

// app.get('/:tableName/:id', (request,response)=>{
//     let table = request.params.tableName
//     let id = request.params.id
//     mysqlCon.query(`SELECT * FROM ${table}s WHERE ${table}.id = ${id};`,(error, results, fields)=> {
//         if (error) {
//             response.send (error.message);
//             throw error
//         };
//         response.send(results)
//     }) 
// })

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