import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Card from './Card';

function Homepage() {
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
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
        console.log('started fetching')
        let songsData = await fetch('/top_songs')
        let songsJS = await songsData.json();
        let artistsData = await fetch('/top_artists');
        let artistsJS = await artistsData.json();
        let playlistsData = await fetch('/top_playlists');
        let playlistsJS = await playlistsData.json();
        setSongs(songsJS);
        setArtists(artistsJS);
        setPlaylists(playlistsJS);
    }

    useEffect(() => {
        fetchData();
    }, []);

    
      
  return ( 
    <div key="content">
      <div key="songs-header">Songs
        <div>
          <Carousel responsive={responsive}
           swipeable={false}
           draggable={false}
           showDots={true}
           responsive={responsive}>
            {songs.map((song,i) => <Card key={i} dataType="song" data={song} />)}
          </Carousel>
        </div>
      </div><br/>
      <div key="artists-header">Artists</div>
      <div>
        <Carousel responsive={responsive}
           swipeable={false}
           draggable={false}
           showDots={true}
           responsive={responsive}>
           {artists.map(artist => <Card dataType="artist" data={artist} />)}
        </Carousel>
       </div><br/>
      {/* <div>Playlists</div>
      <div> <Carousel responsive={responsive}
         swipeable={false}
         draggable={false}
         showDots={true}
         responsive={responsive}>
         {playlists.map(playlist => <Card dataType="playlist" data={playlist} />)}
       </Carousel></div> */}
    </div>
  );
}

export default Homepage;
