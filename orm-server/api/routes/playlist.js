const { Router } = require('express');
const router = Router();
const { Playlist, Song, Album } = require('../../models');

router.get('/', async(request, response) => {
    const allPlaylists = await Playlist.findAll();
    response.json(allPlaylists);
});
router.get('/top_20', async(request, response) => {
    const topPlaylists = await Playlist.findAll({
        limit: 20});
    response.json(topPlaylists);
});
// router.get("/migrate-playlists", async (req, res) => {
//     try {
//       const allPlaylists = await Playlist.findAll({
//         include: [
//           {
//             model: Song,
//             attributes: ["title"]
//           }
//         ],
//       });
//       const body = allPlaylists.flatMap((doc) => [
//         { index: { _index: "playlists" } },
//         doc,
//       ]);
//       const { body: bulkResponse } = await client.bulk({ refresh: true, body });
//       if (bulkResponse.errors) {
//         return res.json(bulkResponse.errors);
//       }
//       const { body: count } = await client.count({ index: "playlists" });
//       res.send(count);
//     } catch (e) {
//       res.json({ error: e.message });
//     }
//   });
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
