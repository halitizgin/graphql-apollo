const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const db = require('./data');
const resolvers = require('./graphql/resolvers/index');

const server = new ApolloServer(
  { 
    typeDefs: importSchema('./graphql/schema/schema.graphql'), 
    resolvers,
    context: {
      db
    }
  }
);

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);