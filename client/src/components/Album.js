import React, { useEffect, useState } from 'react';
import MyCarousel from "./MyCarousel";
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
         <div key={album.name}>
            <h1>{album.name}</h1>
           <img src={album.coverImg} height="200px" width="200px"/>
          </div>
            <div>
            {artists.length > 0 ? (
            <MyCarousel dataType="artists" data={artists} />
          ) : (
            <></>
          )}
          {songs.length > 0 ? (
            <MyCarousel dataType="songs" data={songs} />
          ) : (
            <></>
          )}
            </div>
         
       </div>
    )}
    else return(<></>);
}

export default Album;
