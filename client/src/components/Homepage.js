import React, {useEffect, useState} from 'react';
import 'react-multi-carousel/lib/styles.css'
import MyCarousel from './MyCarousel';

function Homepage() {
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const fetchData = async () => {
        let songsData = await fetch('/top_songs')
        let songsJS = await songsData.json();
        console.log(songsJS);
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
