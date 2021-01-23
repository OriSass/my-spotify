import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Card({ dataType, data, origin }) {
  const render = () => {
    let imgSrc = dataType === "song" ? data.Album.coverImg : data.coverImg;
    let desc = dataType === "song" ? data.title : data.name;
    let linkPath = `/${dataType}/${data.id}`;
    if (dataType === "song") {
      if (origin === "album") {
        origin += data.Album.id;
      }
      if (origin === "artist") {
        origin += data.artist;
      }
      if (origin === "playlist") {
        origin += data.playlist_songs.PlaylistId;
      }
      linkPath = `/${dataType}/${data.id}?origin=${origin}`;
    }
    return (
      <Link to={linkPath}>
        <span key={data.id} className="card">
          <img
            className="carousel-img"
            alt=""
            src={imgSrc}
            height="100px"
            width="100px"
          />
          <p>{desc}</p>
          {dataType === "artist" && renderArtist()}
          {dataType === "playlist" && renderPlaylist()}
        </span>
      </Link>
    );
  };

  const renderArtist = () => {
    return (
      <div>
        <p>published {data.Songs.length} songs</p>
        <p> and {data.Albums.length} albums</p>
      </div>
    );
  };
  const renderPlaylist = () => {
    return <p>{data.song_count} songs</p>;
  };
  return render();
}

export default Card;
