import React, { useEffect, useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
function Card({dataType, data}) {
    
  const render = () => {
    return (
      <Link to={`/${dataType}/${data.id}`}>
        <div key={data.id} className="card">
            <img src={data.img} height="100px" width="100px"/>
            <p>{data.name}</p>
            {dataType === "song" && renderSong()}
            {dataType === "artist" && renderArtist()}
            {dataType === "playlist" && renderPlaylist()}
        </div>
      </Link>
    );
 }
  const renderSong = () => {
      return (<p>{data.artist}</p>);
  }  
  const renderArtist = () =>{
    return (
            <div>
                <p>published {data.song_count} songs</p>
                <p> and {data.album_count} albums</p>
            </div>
    );
  }   
  const renderPlaylist = () =>{
    return (<p>{data.song_count} songs</p>);
  }  
  return (render());
}


export default Card;
