import React, { useEffect, useState } from "react";
import MyCarousel from "./MyCarousel";
import "../App.css";
import {Mixpanel} from '../Analytics/AnalyticsManager';

function Artist({ match }) {
  const [artist, setArtist] = useState();
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    let id = match.params.id;
    let data = await fetch(`/api/artists/${id}`);
    let dataJS = await data.json();
    setArtist(dataJS);
    setAlbums(dataJS.Albums);
    setSongs(dataJS.Songs);
  };


  useEffect(() => {
    fetchData()
  }, []);
  if (songs.length > 0 && albums.length > 0 && artist !== undefined) {
    return (
      <div key="list-wrapper">
        <div key={artist.name}>
          <h1>{artist.name}</h1>
          <img src={artist.coverImg} height="200px" width="200px" />
        </div>
        <div>
          {albums.length > 0 ? (
            <MyCarousel dataType="albums" data={albums} />
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
    );
  } else return <></>;
}

export default Artist;
