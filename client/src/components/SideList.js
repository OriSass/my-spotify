import React, { useState, useEffect } from "react";
import SideSong from "./SideSong";
import "../App.css";
function SideList({ data, origin }) {
  const [songs, setSongs] = useState(data);
  const [userOrigin, setUserOrigin] = useState(origin);

  useEffect(() => {
    console.log(songs);
    console.log("origin ");
    console.log(userOrigin);
  });
  return (
    <div>
      <div>
        <h1>You came from {userOrigin.table}</h1>
      </div>
      {songs.length > 0 ? (
        songs.map((song) => <SideSong data={song} origin={origin} />)
      ) : (
        <></>
      )}
    </div>
  );
}

export default SideList;
