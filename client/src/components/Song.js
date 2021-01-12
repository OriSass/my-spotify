import React, { useEffect, useState } from "react";
import "../App.css";
import {Mixpanel} from '../Analytics/AnalyticsManager';

function Song({ match, location
  // , origin
 }) {
  const [song, setSong] = useState();
  const [songId, setSongId] = useState(match.params.id);
  const [sideSongs, setSideSongs] = useState([]);
  // const [userOrigin, setUserOrigin] = useState(origin);

  const fetchData = async () => {
    let data = await fetch(`/api/songs/${songId}`);
    let dataJS = await data.json();
    setSong(dataJS);
    console.log("Starting side list fetch");
    fetchSideSongs();
  };
  const fetchSideSongs = async () => {
    // console.log(userOrigin);
    console.log(location);
    const searchParams = location.search;
    console.log(searchParams);
    let origin;
    let resultIndex = 0;
    if (searchParams.includes("album")) {
      origin = { table: "album", id: searchParams[searchParams.length - 1] };
    }
    else if (searchParams.includes("playlist")) {
      origin = { table: "playlist", id: searchParams[searchParams.length - 1] };
    }
    else if (searchParams.includes("artist")) {
      origin = { table: "artist", id: searchParams[searchParams.length - 1] };
      resultIndex = 4;
    }
    else if (searchParams.includes("top_songs")) {
      origin = { table: "song", id: searchParams[searchParams.length - 1] };
    }
    console.log("origin is: " + origin);
    if (origin !== undefined) {
      let data = await fetch(
        `/api/songs/${songId}/sideList/${origin.table}/${origin.id}/`
      );
      let dataJS = await data.json();
      console.log(dataJS);
      setSideSongs(dataJS);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (song !== undefined) {
    console.log(sideSongs);
    return (
      <div className="up-space" key="list-wrapper">
        <div key={songId} >
            <div>
              <header>
                <h1>
                    {song.title}
                </h1>
              </header>
              <br></br>
              <iframe
                width="560px"
                height="315px"
                src={`https://www.youtube.com/embed${song.youtubeLink}`}
                frameBorder="0"
                allow="accelerometer; autoplay;
                       clipboard-write; encrypted-media; gyroscope;
                       picture-in-picture"
                allowFullScreen
              ></iframe>
              <br></br>
            </div>
          
        </div>
        {sideSongs.length > 0 ? (
          <div key="side-list-container">
            <ul key="side-list">
              {sideSongs.map((song, i) => (
                <li key={i}>{song.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  } else return <></>;
}

export default Song;
