import React, { useEffect, useState } from 'react';
import "../App.css";

function Album({ match }) {

    const [album, setAlbum] = useState();
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    
    const fetchData = async () => {
        let id = match.params.id; ///album/:id
        let data = await fetch(`/album/${id}`);
        let dataJS = await data.json();
        console.log(dataJS);
        setAlbum(dataJS[0][0]);
        setSongs(dataJS[0]);
        setArtists(Array.isArray(dataJS[2]) ? dataJS[2] : [dataJS[2]]);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(songs !== undefined && album !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={album.name} className="card">
           <img src={album.cover_img} height="100px" width="100px"/>
             <p>songs in album:</p>
             <ul>
               {songs.map(song =><li key={song.id}>{song.title}</li>)}
             </ul>
             <p>Artists in album: </p>
             {artists.map((artist, i) => <p key={i}>{artist.name}</p>)}
         </div>
       </div>
    )}
    else return(<></>);
}

export default Album;
