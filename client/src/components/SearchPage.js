import React, {useEffect} from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ".././App.css";


function SearchPage() {
    const fetchData = async () => {
        const songs = (await axios.get(`/api/songs`)).data;
        const albums = (await axios.get(`/api/albums`)).data;
        const artists = (await axios.get(`/api/artists`)).data;
        const playlist = (await axios.get(`/api/playlists`)).data;
        const initialData = [songs, albums, artists, playlist];
        console.log(initialData);
        const status = await axios.post('/api/search/initial-data', initialData);
    }
    useEffect(async() => {
        //fetchData();
        const songs = (await axios.get('/api/search/songs')).data;
        console.log(songs);
    }, []);
  return (
    <div className={"up-space"}>
      <div>
        <SearchBar />
      </div>
      <div className={"search-results"}></div>
    </div>
  );
}

export default SearchPage;
