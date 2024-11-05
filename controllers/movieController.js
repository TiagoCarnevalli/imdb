const Movie = require('../models/movie');

exports.createMovie = async (req, res) => {
    const { title, genre, director, actors } = req.body;
    const movie = await Movie.create({ title, genre, director, actors });
    res.status(201).json({ movie });
};

exports.getMovies = async (req, res) => {
    const { title, genre, director, actors } = req.query;
    const filters = {};
    if (title) filters.title = { [Op.iLike]: `%${title}%` };
    if (genre) filters.genre = genre;
    if (director) filters.director = director;
    if (actors) filters.actors = { [Op.iLike]: `%${actors}%` };

    const movies = await Movie.findAll({ where: filters });
    res.json(movies);
};

exports.voteMovie = async (req, res) => {
    const { movieId, vote } = req.body;
    const movie = await Movie.findByPk(movieId);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    const votes = movie.votes || [];
    votes.push(vote);
    const averageVote = votes.reduce((sum, v) => sum + v, 0) / votes.length;

    movie.averageVote = averageVote;
    movie.votes = votes;
    await movie.save();

    res.json({ movie });
};
