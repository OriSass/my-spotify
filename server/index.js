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

app.get('/:tableName/:id', (request,response)=>{
    let table = request.params.tableName;
    let id = request.params.id;
    let sql ='';
    switch (table) {
        case 'song': sql = `CALL music.get_song(${id})`;
            break;
        case 'artist': sql = `CALL music.get_artist(${id}); 
                              CALL music.get_artist_albums(${id});
                              CALL music.get_artist_selected_songs(${id})`;
          break;
        case 'album': sql = `CALL get_album(${id});
                             CALL get_album_artists(${id})`;
          break;
        case 'playlist': sql = `CALL get_playlist(${id})`;
          break;
    }
    mysqlCon.query(sql,(error, results, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        response.send(results)
    }) 
})

app.get('/top_:tableName', (request,response)=>{
    let table = request.params.tableName;
    let sql = `SELECT * FROM ${table} LIMIT 20;`;
    switch (table) {
        case 'songs': sql = "CALL get_top_songs()";
            break;
        case 'artists': sql = "CALL get_top_artists()";
          break;
        case 'albums': sql = "CALL get_top_albums()";
          break;
        case 'playlists': sql = "CALL get_top_playlists()";
          break;
    }
    mysqlCon.query(sql ,(error, results, fields)=> {
        if (error) {
            response.send (error.message);
            throw error
        };
        response.send(results[0]);
    }) 
});

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