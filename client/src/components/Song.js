import React, { useEffect, useState } from 'react';
import "../App.css";

function Song({ match }) {

    const [song, setSong] = useState();
    const [songId, setSongId] = useState(match.params.id);
    const fetchData = async () => {
        let data = await fetch(`/song/${songId}`);
        let dataJS = await data.json();
        console.log(dataJS[0][0]);
        setSong(dataJS[0][0]);
    } 

    useEffect(() => {
        fetchData();
    }, []);
    if(song !== undefined){
    return (
       <div className='up-space' key="list-wrapper">
         <div key={songId} className="card">
            <header>{song.title}</header><br></br>
           <iframe width="560px" height="315px"
                   src={`https://www.youtube.com/embed${song.embedded_link}`}
                   frameBorder="0" allow="accelerometer; autoplay;
                   clipboard-write; encrypted-media; gyroscope;
                   picture-in-picture" allowFullScreen></iframe>
                   <br></br>
           <img src={song.album_img} height="100px" width="100px"/>
             <p>length: {Math.floor(song.length / 60)} : {song.length % 60}</p>
             <p>Lyrics:</p>
             <p>{song.lyrics}</p>
         </div>
       </div>
    )}
    else return(<></>);
}

export default Song;
