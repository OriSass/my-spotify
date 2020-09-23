'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Song.init({
    youtubeLink: DataTypes.STRING,
    album: DataTypes.INTEGER,
    artist: DataTypes.INTEGER,
    title: DataTypes.STRING,
    length: DataTypes.INTEGER,
    trackNumber: DataTypes.INTEGER,
    lyrics: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    uploadAt: DataTypes.DATE
  }, {
    sequelize,
    tableName: 'songs',
    modelName: 'Song',
  });
  return Song;
};