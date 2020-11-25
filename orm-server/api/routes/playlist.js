const { Router } = require('express');
const router = Router();
const { Playlist, Song, Album } = require('../../models');

router.get('/top_20', async(request, response) => {
    const topPlaylists = await Playlist.findAll({
        limit: 20});
    response.json(topPlaylists);
});

router.get('/:playlistId', async(request, response) => {
    const playlistId = request.params.playlistId;
    const playlist = await Playlist.findOne({
        where: { id: playlistId },
        include: { model: Song, 
                   include: {model: Album} }
    });
    response.json(playlist);
});

module.exports = router;
