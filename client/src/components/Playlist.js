import React, { useEffect, useState } from 'react';
import "../App.css";

function Playlist({ match }) {

    const [playlist, setPlaylist] = useState();
    const [songs, setSongs] = useState([]);
    
    const fetchData = async () => {
        let id = match.params.id;
        let playlistData = await fetch(`/playlist/${id}`);
        let playlistJS = await playlistData.json();
        setPlaylist(playlistJS[0]);
        setSongs(playlistJS);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(playlist !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={playlist.name} className="card">
           <img src={playlist.cover_img} height="100px" width="100px"/>
             <p>{playlist.name}</p>
             <p>Created at: {playlist.created_at}</p>
             {songs.map(item => <div key={item.song_id}>{item.title}</div>)}
         </div>
       </div>
    )}
    else return(<></>);
}

export default Playlist;
