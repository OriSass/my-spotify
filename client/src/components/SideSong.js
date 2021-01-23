import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
function SideSong({ data, origin }) {
  function generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
  let imgSrc = data.Album.coverImg;
  let desc = data.title;
  //   let linkPath = `/song/${data.id}`;
  let linkPath = {
    pathname: `/song/${data.id}?origin=song`,
    key: generateUUID(), // we could use Math.random, but that's not guaranteed unique.
    state: {
      applied: true,
    },
  };
  console.log(linkPath);
  const [imgPath, setImgPath] = useState();
  const [artist, setArtist] = useState();

  useEffect(() => {
    setImgPath(data.Album.coverImg);
    setArtist(data.Artist.name);
  });

  return (
    <Link to={linkPath}>
      <div className="side-song-container">
        <div>
          <img width="100px" height="100px" src={imgPath} />
        </div>
        <div>
          <div>
            <h3>{data.title}</h3>
          </div>
          <div>
            <h4> by : {artist}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SideSong;
