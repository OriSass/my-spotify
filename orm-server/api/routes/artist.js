const { Router } = require('express');
const router = Router();
const { Artist, Song, Album } = require('../../models');
const { Sequelize } = require('sequelize');

 Artist.getSongCount = async() => await Artist.findAll({
    limit: 20,
    include: [{ model: Song }, { model: Album }]
  });
router.get('/top_20', async(request, response) => {
    const countSongs = await Artist.getSongCount();
    const topArtists = await Artist.findAll({
        limit: 20
    });
    response.json(countSongs);
});
router.get('/:artistId', async(request, response) => {
    const artistId = request.params.artistId;
    const artist = await Artist.findOne({
        where: { id: artistId },
        include: [{ model: Song }, { model: Album}]
    });
    response.json(artist);
});

module.exports = router;
