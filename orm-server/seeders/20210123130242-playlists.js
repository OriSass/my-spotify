"use strict";
const mockPlaylists = require("./data/mockPlaylists");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("playlists", mockPlaylists, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("playlists", null, {});
  },
};