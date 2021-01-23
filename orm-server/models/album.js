"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Song, { foreignKey: "album" });
      this.belongsToMany(models.Artist, { through: "artist_albums" });
    }
  }
  Album.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      coverImg: DataTypes.TEXT,
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "albums",
      modelName: "Album",
    }
  );
  return Album;
};
