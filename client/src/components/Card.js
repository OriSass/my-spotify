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
        <Link to={`/song/${song.id}`}>
          <div key={song.id} className="card">
              <img src={song.album_img} height="100px" width="100px"/>
              <p>{song.title}</p>
              <p>{song.artist}</p>
          </div>
        </Link>
      );
  }  
  const renderArtist = () =>{
    let artist = cardData;
    return (
      <Link to={`/artist/${artist.id}`}>
        <div key={artist.id} className="card">
            <img src={artist.img} height="100px" width="100px"/>
            <p>{artist.name}</p>
            <p>published {artist.song_count} songs</p>
            <p> and {artist.album_count} albums</p>
        </div>
      </Link>
    );
  }  
  const renderAlbum = () =>{
    let album = cardData;
    return (
      <Link to={`/album/${album.id}`}>
      <div key={album.id} className="card">
          <img src={album.img} height="100px" width="100px"/>
          <p>{album.name}</p>
      </div>
      </Link>    
    );
  }  
  const renderPlaylist = () =>{
    let playlist = cardData;
    return (
     <Link to={`/playlist/${playlist.id}`}>
        <div key={playlist.id} className="card">
              <img src={playlist.cover_img} height="100px" width="100px"/>
            <p>{playlist.name}</p>
            <p>{playlist.song_count} songs</p>
        </div>
      </Link>
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
