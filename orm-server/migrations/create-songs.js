"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      album: {
        type: Sequelize.INTEGER,
      },
      artist: {
        type: Sequelize.INTEGER,
      },
      length: {
        type: Sequelize.INTEGER,
      },
      track_number: {
        type: Sequelize.INTEGER,
      },
      lyrics: {
        type: Sequelize.TEXT,
      },
      youtube_link: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("songs");
  },
};
