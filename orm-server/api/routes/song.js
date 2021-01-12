const { Router } = require('express');
const router = Router();
const { Song, Artist, Album, Playlist } = require('../../models');

router.get('/', async(request, response) => {
    const songs = await Song.findAll();
    response.json(songs);
});
router.get('/top_20', async(request, response) => {
    const topSongs = await Song.findAll({
        include: { model: Album, attributes: ["coverImg"] },
        limit: 20
    });
    response.json(topSongs);
});

router.get('/:songId/sideList/:origin/:originId', async(request, response) => {
    console.log('=============================================');
    const { origin } = request.params;
    const { originId } = request.params;
    switch (origin) {
        case 'song': const topSongs = await Song.findAll({include: [{model: Album},{model:Artist}],limit: 20});
                     response.json(topSongs);
            break;
        case 'artist': const artist = await Song.findAll({ where: {artist: originId}, include: [{model: Album},{model:Artist}] });
                        response.json(artist);
          break;
        case 'album': const album = await Song.findAll({where: {album: originId}, include: [{model: Album},{model:Artist}] });
                        response.json(album);
          break;
        case 'playlist': const playlist = await Playlist.findOne({where: {id: originId}, include: {model: Song, include: [{model: Album},{model:Artist}] }});
                        response.json(playlist.Songs);
          break;
        default: response.status(404).send(`Didn't find no songs..`)
    }
});
router.get('/:songId', async(request, response) => {
    const { songId } = request.params;
    const song = await Song.findOne({
         where: { id: songId},
         include: { model: Album, attributes: ["coverImg"] }
        });
    response.json(song); 
});
  
module.exports = router;
