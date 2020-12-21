const { ApolloServer } = require("apollo-server-lambda");

const { typeDefs, resolvers } = require("./graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});
exports.handler = server.createHandler();
