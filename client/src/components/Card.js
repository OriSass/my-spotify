import React, { useEffect, useState } from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Card({dataType, data}) {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        setCardData(data);
    }, []);

  const renderSong = () => {
      let song = cardData;
      console.log(song);
      return (
        <div key={song.id} className="card">
            <img src={song.album_img} height="200px" width="200px"/>
            <p>{song.title}</p>
            <p>{song.artist}</p>
        </div>
      );
  }  
  const renderArtist = () =>{
    let artist = cardData;
    console.log(artist);
    return (
      <div key={artist.id} className="card">
          <img src={artist.img} height="200px" width="200px"/>
          <p>{artist.name}</p>
          <p>published {artist.song_count} songs</p>
          <p> and {artist.album_count} albums</p>
      </div>
    );
  }  
  const renderPlaylist = () =>{

  }  
  const renderByDataType = () =>{
      if(dataType === 'song'){
        return renderSong();
      }
      if(dataType === 'artist'){
        return renderArtist();
      }
      if(dataType === 'playlist'){
        return renderPlaylist();
      }
  }
  return (
    renderByDataType()
  );
}

export default Card;
