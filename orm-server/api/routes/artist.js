const { Router } = require('express');
const router = Router();
const { Artist, Song, Album } = require('../../models');
const { Sequelize } = require('sequelize');

 Artist.getSongCount = async() => await Artist.findAll({
    limit: 20,
    include: [{ model: Song }, { model: Album }]
  });
router.get('/', async(request, response) => {
    const songs = await Artist.findAll();
    response.json(songs);
});
router.get('/top_20', async(request, response) => {
    const countSongs = await Artist.getSongCount();
    console.log(countSongs);
    const topArtists = await Artist.findAll({
        limit: 20
    });
    //console.log(topArtists);
    response.json(countSongs);
});
// router.get("/migrate-artists", async (req, res) => {
//     try {
//       const allArtist = await Artist.findAll({
//         include: [
//           {
//             model: Song,
//             attributes: ["title"],
//           },
//           {
//             model: Album,
//             attributes: ["name"],
//           },
//         ],
//       });
//       const body = allArtist.flatMap((doc) => [
//         { index: { _index: "artists" } },
//         doc,
//       ]);
//       const { body: bulkResponse } = await client.bulk({ refresh: true, body });
//       if (bulkResponse.errors) {
//         return res.json(bulkResponse.errors);
//       }
//       const { body: count } = await client.count({ index: "artists" });
//       res.send(count);
//     } catch (e) {
//       res.json({ error: e.message });
//     }
//   });
router.get('/:artistId', async(request, response) => {
    const artistId = request.params.artistId;
    const artist = await Artist.findOne({
        where: { id: artistId },
        include: [{ model: Song }, { model: Album}]
    });
    response.json(artist);
});

module.exports = router;
