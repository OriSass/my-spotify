import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import MyCarousel from './MyCarousel';
import {Mixpanel} from '../Analytics/AnalyticsManager';

function Homepage() {

    const verifyUser = () =>{
    
    }
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const location = useLocation().pathname;

    
    const fetchData = async () => {
        let songsData = await fetch('/api/songs/top_20')
        let songsJS = await songsData.json();
        let artistsData = await fetch('/api/artists/top_20');
        let artistsJS = await artistsData.json();
        let albumsData = await fetch('/api/albums/top_20');
        let albumsJS = await albumsData.json();
        let playlistsData = await fetch('/api/playlists/top_20');
        let playlistsJS = await playlistsData.json();
        playlistsJS = Array.isArray(playlistsJS) === false ? [playlistsJS] : playlistsJS;
        setSongs(songsJS);
        setArtists(artistsJS);
        setAlbums(albumsJS);
        setPlaylists(playlistsJS);
    }

    useEffect(() => {
        verifyUser();
        fetchData();
    }, []);
  return ( 
    <>
    {playlists.length > 0 && 
    <div key="content">
      <MyCarousel dataType="songs" data={songs}/> 
      <MyCarousel dataType="artists" data={artists}/> 
      <MyCarousel dataType="albums" data={albums}/> 
      <MyCarousel dataType="playlists" data={playlists}/> 
    </div>}
    </>
        
      
  );
}

export default Homepage;
