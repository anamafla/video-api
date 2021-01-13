const { ApolloServer } = require("apollo-server-lambda");

const { typeDefs, resolvers } = require("./graphql/index");

const server = new ApolloServer({
  origin: "*",
  credentials: true,
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});
exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
