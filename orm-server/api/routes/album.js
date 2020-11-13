const { Router } = require('express');
const router = Router();
const { Album, Song, Artist } = require('../../models');

router.get('/', async(request, response) => {
    const albums = await Album.findAll();
    response.json(albums);
});
router.get('/top_20', async(request, response) => {
    const topAlbums = await Album.findAll({limit: 20});
    response.json(topAlbums);
});
// router.get("/migrate-albums", async (req, res) => {
//     try {
//       const allAlbums = await Album.findAll({
//         include: [
//           {
//             model: Song,
//             attributes: ["title"],
//           }
//         ],
//       });
//       const body = allAlbums.flatMap((doc) => [
//         { index: { _index: "albums" } },
//         doc,
//       ]);
//       const { body: bulkResponse } = await client.bulk({ refresh: true, body });
//       if (bulkResponse.errors) {
//         return res.json(bulkResponse.errors);
//       }
//       const { body: count } = await client.count({ index: "albums" });
//       res.send(count);
//     } catch (e) {
//       res.json({ error: e.message });
//     }
//   });
router.get('/:albumId', async(request, response) => {
    const albumId = request.params.albumId;
    const album = await Album.findOne({
        where: { id: albumId },
        include: [{ model: Song }, { model: Artist}]
    });
    console.log(album);
    response.json(album);
});
module.exports = router;
