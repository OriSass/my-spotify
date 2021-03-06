const { Router } = require('express');

const router = Router();

router.use('/songs', require('./routes/song'));
router.use('/albums', require('./routes/album'));
router.use('/artists', require('./routes/artist'));
router.use('/playlists', require('./routes/playlist'));
router.use('/search', require('./routes/search'));

module.exports = router;
