"use strict";
const mockArtists = require("./data/mockArtists");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("artists", mockArtists, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("artists", null, {});
  },
};