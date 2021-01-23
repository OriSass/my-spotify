"use strict";
const { Model } = require("sequelize");
const { Song } = require("../models");
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static getSongCount = async (models) =>
      await this.findAll({
        limit: 20,
        include: {
          model: models.Song,
          attributes: [sequelize.fn("count"), sequelize.col("id")],
        },
      });
    static associate(models) {
      // define association here
      this.hasMany(models.Song, { foreignKey: "artist" });
      this.belongsToMany(models.Album, { through: "artist_albums" });
    }
  }
  Artist.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      coverImg: DataTypes.TEXT,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "artists",
      modelName: "Artist",
    }
  );
  return Artist;
};
