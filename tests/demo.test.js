const typeDefs = require("../src/graphql/typeDefs");
const { gql } = require("apollo-server-lambda");

describe("types", () => {
  test("Check if types has correct fields", () => {
    expect(typeDefs).toBe(gql`
      type Videos {
        id: ID
        description: String
        videoUrl: String
        subtitle: String
        thumb: String
        name: String
        slug: String
        duration: Int
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
        duration: Int
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

      type Mutation {
        updateVideo(
          id: ID!
          description: String
          videoUrl: String
          subtitle: String
          thumb: String
          name: String
          slug: String
          duration: Int
          sort: Int
          isCompleted: Boolean
          category: String
        ): Video!
      }
    `);
  });
});
