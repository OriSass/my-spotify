import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Album({ match }) {

    const [album, setAlbum] = useState();
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const [albumId, setAlbumId] = useState(match.params.id);
    
    const fetchData = async () => {
        let data = await fetch(`/api/albums/${albumId}`);
        let dataJS = await data.json();
        console.log(dataJS);
        setAlbum(dataJS);
        setSongs(dataJS.Songs);
        setArtists(dataJS.Artists);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(songs !== undefined && album !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={album.name} className="card">
           <img src={album.coverImg} height="100px" width="100px"/>
             <p>songs in album:</p>
             <ul>
               {songs.map(song =><li key={song.id}><Link to={`/song/${song.id}?album=${albumId}`}>{song.title}</Link></li>)}
             </ul>
             <p>Artists in album: </p>
             {artists.map((artist, i) => <p key={i}>{artist.name}</p>)}
         </div>
       </div>
    )}
    else return(<></>);
}

export default Album;
