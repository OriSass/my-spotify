import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Playlist({ match }) {

    const [playlist, setPlaylist] = useState();
    const [songs, setSongs] = useState([]);
    
    const fetchData = async () => {
        let id = match.params.id;
        let playlistData = await fetch(`/playlist/${id}`);
        let playlistJS = await playlistData.json();
        console.log(playlistJS);
        setPlaylist(playlistJS[0][0]);
        setSongs(playlistJS[0]);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(playlist !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={playlist.name} className="card">
           <img src={playlist.img} height="100px" width="100px"/>
             <p>{playlist.name}</p>
             <p>Created at: {playlist.created_at.split('T')[0]}</p>
             {songs.map(song => {
               return (
                  <div key={song.song_id}>
                      <Link to={`/song/${song.song_id}?playlist=${match.params.id}`}>
                          {song.title}
                      </Link>
                  </div>
              )})}
         </div>
       </div>
    )}
    else return(<></>);
}

export default Playlist;
