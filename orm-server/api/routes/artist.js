const { Router } = require('express');
const router = Router();
const { Artist } = require('../../models');

router.get('/top_20', async(request, response) => {
    const topArtists = await Artist.findAll({limit: 20});
    response.json(topArtists);
});

module.exports = router;
