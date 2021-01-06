// TO DO : Fix the route of data
const videos = require("../data/data");

// const videos = [{}];

const resolvers = {
  Query: {
    videos: () => videos,
    video: (_, { id }) => videos.find(video => video.id == id)
  }
};

module.exports = resolvers;
