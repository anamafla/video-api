const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Videos {
    id: ID
    description: String
    sources: String
    subtitle: String
    thumb: String
    title: String
  }

  type Video {
    id: ID
    description: String
    sources: String
    subtitle: String
    thumb: String
    title: String
  }

  type Query {
    video(id: ID!): Video
    videos: [Videos]
  }
`;

module.exports = typeDefs;
