const { Router } = require('express');
const router = Router();
const { Album } = require('../../models');

router.get('/top_20', async(request, response) => {
    const topAlbums = await Album.findAll({limit: 20});
    response.json(topAlbums);
});

module.exports = router;
