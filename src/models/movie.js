const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Movie extends Model {}

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actors: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    averageVote: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    sequelize,
    modelName: 'Movie',
});

module.exports = Movie;
