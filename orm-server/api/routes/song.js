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

router.get('/:songId', async(request, response) => {
    const { songId } = request.params;
    const song = await Song.findOne({
         where: { id: songId},
         include: { model: Album, attributes: ["coverImg"] }
        });
    response.json(song); 
});
router.get('/:songId/sideList/:origin/:originId', async(request, response) => {
    const { origin } = request.params;
    const { originId } = request.params;
    switch (origin) {
        case 'song': const topSongs = await Song.findAll({limit: 20});
                     response.json(topSongs);
            break;
        case 'artist': const artist = await Artist.findOne({ where: {id: originId}, include: Song });
                        response.json(artist.Songs);
          break;
        case 'album': const album = await Album.findOne({where: {id: originId}, include: Song });
                        response.json(album.Songs);
          break;
        case 'playlist': const playlist = await Playlist.findOne({where: {id: originId}, include: Song });
                        response.json(playlist.Songs);
          break;
    }
});
module.exports = router;
