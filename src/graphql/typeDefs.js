const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type videos {
    id: ID
    description: String
    source: String
    subtitle: String
    title: String
  }

  type Query {
    Videos: [videos]
  }
`;

module.exports = typeDefs;
