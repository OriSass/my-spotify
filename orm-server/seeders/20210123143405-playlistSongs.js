"use strict";
const mockPlaylistSongs = require("./data/mockPlaylistSongs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("playlist_songs", mockPlaylistSongs, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("playlist_songs", null, {});
  },
};
