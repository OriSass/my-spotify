import React, { useEffect, useState } from 'react';
import MyCarousel from "./MyCarousel";
import "../App.css";

function Playlist({ match }) {

    const [playlist, setPlaylist] = useState();
    const [songs, setSongs] = useState([]);
    
    const fetchData = async () => {
        let id = match.params.id;
        let playlistData = await fetch(`/api/playlists/${id}`);
        let playlistJS = await playlistData.json();
        setPlaylist(playlistJS);
        setSongs(playlistJS.Songs);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(playlist !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={playlist.name}>
             <h1>{playlist.name}</h1>
           <img src={playlist.coverImg} height="200px" width="200px"/>
         </div>
         <div>
             <p>Created at: {playlist.createdAt.split('T')[0]}</p>
             {songs.length > 0 ? (
            <MyCarousel dataType="songs" data={songs} origin="playlist" />
          ) : (
            <></>
          )}
         </div>
       </div>
    )}
    else return(<></>);
}

export default Playlist;
