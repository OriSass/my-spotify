import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Playlist({ match }) {

    const [playlist, setPlaylist] = useState();
    const [songs, setSongs] = useState([]);
    
    const fetchData = async () => {
        let id = match.params.id;
        let playlistData = await fetch(`/api/playlists/${id}`);
        let playlistJS = await playlistData.json();
        console.log(playlistJS);
        setPlaylist(playlistJS);
        setSongs(playlistJS.Songs);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(playlist !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={playlist.name} className="card">
           <img src={playlist.coverImg} height="100px" width="100px"/>
             <p>{playlist.name}</p>
             <p>Created at: {playlist.createdAt.split('T')[0]}</p>
             {songs.map(song => {
               return (
                  <div key={song.id}>
                      <Link to={`/song/${song.id}?playlist=${match.params.id}`}>
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
