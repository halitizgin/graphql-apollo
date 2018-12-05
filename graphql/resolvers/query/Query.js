const Query = {
    movie: (parent, args, { db }) => {
      return db.movies.find(movie => movie.id === args.id);
    },
    movies: (parent, args, { db }) => {
      return db.movies;
    },
    director: (parent, args, { db }) => {
      return db.directors.find(director => director.id === args.id);
    },
    directors: (parent, args, { db }) => {
      return db.directors;
    }
};

module.exports = Query;