import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

function Artist({ match }) {

    const [artist, setArtist] = useState();
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    
    const fetchData = async () => {
        let id = match.params.id; 
        let data = await fetch(`/artist/${id}`);
        let dataJS = await data.json();
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
             
             {songs.map((song) => { return (
               <p key={song.id}>
                  <Link to={`/song/${song.id}?artist=${match.params.id}`}>
                      {song.title}
                  </Link>
               </p>)}
             )}
         </div>
       </div>
    )}
    else return(<></>);
}

export default Artist;
