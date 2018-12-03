const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { directors, movies } = require('./data');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query{
    movie(id: ID!): Movie,
    movies: [Movie],
    director(id: ID!): Director,
    directors: [Director]
  }

  type Movie{
    id: ID!,
    title: String!,
    description: String,
    year: Int,
    director: Director
  }

  type Director{
    id: ID!,
    name: String!,
    birth: Int!,
    movies: [Movie]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    movie: (parent, args) => {
      return movies.find(movie => movie.id === args.id);
    },
    movies: (parent, args) => {
      return movies;
    },
    director: (parent, args) => {
      return directors.find(director => director.id === args.id);
    },
    directors: (parent, args) => {
      return directors;
    }
  },
  Movie: {
    director: (parent, args) => {
      return directors.find(director => director.id === parent.directorId);
    }
  },
  Director: {
    movies: (parent, args) => {
      return movies.filter(movie => movie.directorId === parent.id)
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);