const { Router } = require('express');
const router = Router();
const { Song } = require('../../models');


router.get('/top_20', async(request, response) => {
    const topSongs = await Song.findAll({limit: 20});
    response.json(topSongs);
});


module.exports = router;
