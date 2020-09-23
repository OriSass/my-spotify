const { Router } = require('express');
const router = Router();
const { Playlist } = require('../../models');

router.get('/top_20', async(request, response) => {
    const topPlaylists = await Playlist.findAll({limit: 20});
    response.json(topPlaylists);
});

module.exports = router;
