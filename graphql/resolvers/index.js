const Query = require('./query/Query');
const Movie = require('./query/Movie');
const Director = require('./query/Director');

const Mutation = require('./mutation/index');

module.exports = {
    Query,
    Mutation,
    Movie,
    Director
};