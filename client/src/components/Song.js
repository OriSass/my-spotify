import React, { useEffect, useState } from "react";
import SideList from "./SideList";
import "../App.css";


function Song({ match, location }) {
  const [song, setSong] = useState();
  const [songId, setSongId] = useState(match.params.id);
  const [sideSongs, setSideSongs] = useState([]);
  const [userOrigin, setUserOrigin] = useState();

  const fetchData = async () => {
    let data = await fetch(`/api/songs/${songId}`);
    let dataJS = await data.json();
    setSong(dataJS);
    fetchSideSongs();
  };
  const fetchSideSongs = async () => {
    const searchParams = location.search;
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
    else if (searchParams.includes("song")) {
      origin = { table: "song", id: searchParams[searchParams.length - 1] };
    }
    if (origin !== undefined) {
      setUserOrigin(origin);
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
  useEffect(() => {
    console.log(userOrigin);
  }, [userOrigin]);
  if (song !== undefined) {
    return (
      <div className="song-page-wrapper" key="list-wrapper">
        
        {sideSongs.length > 0 ? 
        <SideList data={sideSongs} origin={userOrigin} />
        : (
          <></>
        )}
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
      </div>
    );
  } else return <></>;
}

export default Song;
