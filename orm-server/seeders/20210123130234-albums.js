"use strict";
const mockAlbums = require("./data/mockAlbums");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("albums", mockAlbums, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("albums", null, {});
  },
};