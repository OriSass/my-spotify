"use strict";
const mockSongs = require("./data/mockSongs");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("songs", mockSongs, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("songs", null, {});
  },
};
