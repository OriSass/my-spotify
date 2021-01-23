"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("artists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      cover_img: {
        type: Sequelize.TEXT,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("artists");
  },
};
