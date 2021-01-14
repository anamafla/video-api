const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Videos {
    id: ID
    description: String
    videoUrl: String
    subtitle: String
    thumb: String
    name: String
    slug: String
    duration: String
    sort: Int
    isCompleted: Boolean
    category: String
  }

  type Video {
    id: ID
    description: String
    videoUrl: String
    subtitle: String
    thumb: String
    name: String
    slug: String
    duration: String
    sort: Int
    isCompleted: Boolean
    category: String
  }

  type Sections {
    id: ID!
    name: String
    sort: Int
    videos: [Video]
  }

  type Query {
    video(id: ID!): Video
    videos: [Videos]
    sections: [Sections]
  }
`;

module.exports = typeDefs;
