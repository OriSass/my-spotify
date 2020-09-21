import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Card from './Card';
import MyCarousel from './MyCarousel';

function Homepage() {
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const fetchData = async () => {
        let songsData = await fetch('/top_songs')
        let songsJS = await songsData.json();
        let artistsData = await fetch('/top_artists');
        let artistsJS = await artistsData.json();
        let albumsData = await fetch('/top_albums');
        let albumsJS = await albumsData.json();
        let playlistsData = await fetch('/top_playlists');
        let playlistsJS = await playlistsData.json();
        // change later
        playlistsJS = Array.isArray(playlistsJS) === false ? [playlistsJS] : playlistsJS;
        setSongs(songsJS);
        setArtists(artistsJS);
        setAlbums(albumsJS);
        setPlaylists(playlistsJS);
    }

    useEffect(() => {
        fetchData();
    }, []);

    
      
  return ( 
    <div className='up-space' key="content">

    {songs.length > 0 && <MyCarousel dataType="songs" data={songs}/> }
    {artists.length > 0 && <MyCarousel dataType="artists" data={artists}/> }
    {albums.length > 0 && <MyCarousel dataType="albums" data={albums}/> }
    {playlists.length > 0 &&  <MyCarousel dataType="playlists" data={playlists}/> } 
      </div>
        
      
  );
}

export default Homepage;
