"use strict";
const mockArtistAlbums = require("./data/mockArtistAlbums");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("artist_albums", mockArtistAlbums, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("artist_albums", null, {});
  },
};
