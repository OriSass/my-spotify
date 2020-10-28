import React, { useEffect, useState } from 'react';
import "../App.css";
import {Mixpanel} from '../Analytics/AnalyticsManager';

function Song({ match, location }) {

    const [song, setSong] = useState();
    const [songId, setSongId] = useState(match.params.id);
    const [sideSongs, setSideSongs] = useState([]);
 

    const fetchData = async () => {
        let data = await fetch(`/api/songs/${songId}`);
        let dataJS = await data.json();
        console.log(dataJS);
        setSong(dataJS);
        fetchSideSongs();
    } 
    const fetchSideSongs = async () => {   
        const qParams = new URLSearchParams(location.search);
        let origin;
        let resultIndex = 0;
        if(qParams.get('album') !== null){
            origin = {table: 'album', id: qParams.get('album')}; 
        } 
        if(qParams.get('playlist') !== null){
            origin = {table: 'playlist', id: qParams.get('playlist')}; 
        } 
        if(qParams.get('artist') !== null){
            origin = {table: 'artist', id: qParams.get('artist')}; 
            resultIndex = 4;
        } 
        if(qParams.get('top_songs') !== null){
            origin = {table: 'song', id: qParams.get('top_songs')}; 
        }
        if(origin !== undefined){
            console.log('origin: ' + origin.table + ' ' + origin.id);
            let data = await fetch(`/api/songs/${songId}/sideList/${origin.table}/${origin.id}/`);
            let dataJS = await data.json();
            console.log(dataJS);
            setSideSongs(dataJS);
        }
    }

    useEffect(() => {
        fetchData();
        Mixpanel.track("reached song", {songId: match.params.id});
    }, []);
    if(song !== undefined){
    return (
       <div className='up-space main-container' key="list-wrapper">
         <div key={songId} className="card">
            <header>{song.title}</header><br></br>
           <iframe width="560px" height="315px"
                   src={`https://www.youtube.com/embed${song.youtubeLink}`}
                   frameBorder="0" allow="accelerometer; autoplay;
                   clipboard-write; encrypted-media; gyroscope;
                   picture-in-picture" allowFullScreen></iframe>
                   <br></br>
           <img src={song.Album.coverImg} height="100px" width="100px"/>
             <p>length: {Math.floor(song.length / 60)} : {song.length % 60}</p>
             <p>Lyrics:</p>
             <p>{song.lyrics}</p>
         </div>
         {sideSongs.length > 0 ?
         <div key="side-list-container">
            <ul key="side-list">
                {sideSongs.map((song, i) => <li key={i}>{song.title}</li>)}
            </ul>
         </div>:<></>}
       </div>
    )}
    else return(<></>);
}

export default Song;
