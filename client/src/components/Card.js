import React, { useEffect, useState } from 'react';
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Card({dataType, data}) {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        setCardData(data);
    }, []);

  const renderSong = () => {
      let song = cardData;
      return (
        <div key={song.id} className="card">
            <img src={song.album_img} height="100px" width="100px"/>
            <p>{song.title}</p>
            <p>{song.artist}</p>
        </div>
      );
  }  
  const renderArtist = () =>{
    let artist = cardData;
    return (
      <div key={artist.id} className="card">
          <img src={artist.img} height="100px" width="100px"/>
          <p>{artist.name}</p>
          <p>published {artist.song_count} songs</p>
          <p> and {artist.album_count} albums</p>
      </div>
    );
  }  
  const renderAlbum = () =>{
    let album = cardData;
    return (
      <div key={album.id} className="card">
      <Link to={`/album/${album.id}`}>
          <img src={album.img} height="100px" width="100px"/>
      </Link>    
          <p>{album.name}</p>
      </div>
    );
  }  
  const renderPlaylist = () =>{
    let playlist = cardData;
    return (
      <div key={playlist.id} className="card">
          <Link to={`/playlist/${playlist.id}`}>
            <img src={playlist.cover_img} height="100px" width="100px"/>
          </Link>
          <p>{playlist.name}</p>
          <p>{playlist.song_count} songs</p>
      </div>
    );
  }  
  const renderByDataType = () =>{
      if(dataType === 'song'){
        return renderSong();
      }
      if(dataType === 'artist'){
        return renderArtist();
      }
      if(dataType === 'album'){
        return renderAlbum();
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
