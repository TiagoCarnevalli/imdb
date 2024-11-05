const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Model {}
  Movie.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      director: { type: DataTypes.STRING, allowNull: false },
      genre: { type: DataTypes.STRING },
      cast: { type: DataTypes.ARRAY(DataTypes.STRING) },
      avgRating: { type: DataTypes.FLOAT, defaultValue: 0 },
    },
    { sequelize, modelName: 'Movie' }
  );
  return Movie;
};
