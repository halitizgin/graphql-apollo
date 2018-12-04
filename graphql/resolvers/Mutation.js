const Mutation = {
    addDirector: (parent, args, { db }) => {
      const director = {
        id: Math.random().toString(36).substr(2, 10),
        ...args.data
      }
      db.directors.push(director);
      return director;
    },
    addMovie: (parent, args, { db }) => {
      const directorExist = db.directors.some(director => director.id === args.data.directorId);

      if (!directorExist)
        throw new Error("Director does not exist!");

      const movie = {
        id: Math.random().toString(36).substr(2, 10),
        ...args.data
      }
      db.movies.push(movie);
      return movie;
    }
};

module.exports = Mutation;