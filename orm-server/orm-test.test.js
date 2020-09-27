  
const request = require('supertest');
const app = require('./app');
const { Song, Album, Artist, Playlist } = require('./models');

const playlistMock = [{
  id: 1,
  name: 'mix',
  coverImg: 'adfkjbh',
  createdAt: Date.now(),
  uploadAt: Date.now()
},{
  id: 2,
  name: 'sdv',
  coverImg: 'adfkjbh',
  createdAt: Date.now(),
  uploadAt: Date.now()
}]
const artistMock = [{
  id: 1,
  name: "evyatar",
  coverImg: 'zdfbza',
  createdAt: Date.now(),
  uploadAt: Date.now()
},
{
  id: 2,
  name: "nechi nech",
  coverImg: 'zdfbza',
  createdAt: Date.now(),
  uploadAt: Date.now()
}]

const albumMock = [{
  id: 1,
  name: "buya",
  coverImg: 'zdfbza',
  createdAt: Date.now(),
  uploadAt: Date.now()
},
{
  id: 2,
  name: "buya2",
  coverImg: 'zdfbza',
  createdAt: Date.now(),
  uploadAt: Date.now()
}]

const songsMock = [{
  id: 1,
  youtubeLink: `https://www.youtube.com/watch?v=TEaLbyPAloY`,
  album: 1,
  artist: 1,
  title: `אבא`,
  length: 293,
  trackNumber: 9,
  createdAt: Date.now(),
  uploadAt: Date.now(),
  lyrics: `ביום כיפור  ונקי תמריא`
},
{
  id: 2,
  youtubeLink: `/5SbnVxukAaI`,
  album: 2,
  artist: 2,
  title: `עולם ומלואו`,
  length: 293,
  trackNumber: 9,
  createdAt: Date.now(),
  uploadAt: Date.now(),
  lyrics: `פה עקומה, קירות מגבס אבא אומר הבית נבנה `
},
{
  id: 3,
  youtubeLink: `/5bsfdtbgVxukAaI`,
  album: 2,
  artist: 2,
  title: `בלוז הלב השבור`,
  length: 293,
  trackNumber: 9,
  createdAt: Date.now(),
  uploadAt: Date.now(),
  lyrics: `פה עקומה, קירות מגבס אבא אומר הבית נבנה `
}]

describe(`Basic functionality`, () => {

  beforeEach(async () => {
    await Song.destroy({ truncate: true, force: true });
    await Album.destroy({ truncate: true, force: true });
  });

  it('Can get all songs', async () => {
    const addedSongs = await Song.bulkCreate(songsMock);
    const songs = await request(app).get('/api/songs');
    expect(songs.body.length).toBe(addedSongs.length);
  })  
  it('Can get a specific song', async () => {
    const addedSongs = await Song.bulkCreate(songsMock);
    const addedAlbum = await Album.bulkCreate(albumMock);
    const song = await request(app).get(`/api/songs/${addedSongs[0].id}`);
    expect(song.body.title).toBe(addedSongs[0].title);
    expect(song.body.Album.coverImg).toBe(addedAlbum[0].coverImg);
    
  })  
})

describe(`Side List check`, () => {
  beforeEach(async () => {
    await Song.destroy({ truncate: true, force: true });
    await Album.destroy({ truncate: true, force: true });
    await Artist.destroy({ truncate: true, force: true });
    await Playlist.destroy({ truncate: true, force: true });
  
  });

  it('songs via album', async () => {
    const addedSongs = await Song.bulkCreate(songsMock);
    const addedAlbum = await Album.bulkCreate(albumMock);
    const sideList = await 
      request(app).get(`/api/songs/${addedSongs[1].id}/sideList/album/${addedSongs[1].album}`);
    const songsInAlbum = await Song.findAll({where: {album: addedSongs[1].album}});
    expect(sideList.body.length).toBe(songsInAlbum.length);
  }) 
  it('songs via artist', async () => {
    const addedSongs = await Song.bulkCreate(songsMock);
    const addedArtist = await Artist.bulkCreate(artistMock);
    const sideList = await 
      request(app).get(`/api/songs/${addedSongs[1].id}/sideList/artist/${addedSongs[1].artist}`);
    const songsByArtist = await Song.findAll({where: {artist: addedSongs[1].artist}});
    expect(sideList.body.length).toBe(songsByArtist.length);
  }) 
  it('songs via playlist', async () => {
    const addedSongs = await Song.bulkCreate(songsMock);
    const addedPlaylist = await Playlist.create(playlistMock[0]);
    await addedPlaylist.addSong(addedSongs);
    const finalPlaylist = await Playlist.findOne({
      where: {id: playlistMock[0].id},
      include: Song
    });
    console.log(finalPlaylist.Songs.length);
    const sideList = await 
      request(app).get(`/api/songs/${addedSongs[1].id}/sideList/playlist/${addedPlaylist.id}`);
    expect(sideList.body.length).toBe(finalPlaylist.Songs.length);
  }) 
})