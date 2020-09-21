import React, { useEffect, useState } from 'react';
import "../App.css";

function Artist({ match }) {

    const [artist, setArtist] = useState();
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    
    const fetchData = async () => {
        let id = match.params.id; ///album/:id
        let data = await fetch(`/artist/${id}`);
        let dataJS = await data.json();
        console.log(dataJS);
        setArtist(dataJS[0][0]);
        setAlbums(Array.isArray(dataJS[2]) ? dataJS[2] : [dataJS[2]]);
        setSongs(dataJS[4]);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(songs !== undefined && albums !== undefined && artist !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={artist.name} className="card">
           <img src={artist.cover_img} height="100px" width="100px"/>
             <p>List of albums:</p>
             <ul>
               {albums.map(album =><li key={album.name}>{album.name}</li>)}
             </ul>
             <p>Selected songs:</p>
             {songs.map((song) => <p key={song.id}>{song.title}</p>)}
         </div>
       </div>
    )}
    else return(<></>);
}

export default Artist;
