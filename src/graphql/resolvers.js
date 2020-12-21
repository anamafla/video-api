// TO DO : Fix the route of data
const videos = require("../data/data");

// const videos = [{}];

const resolvers = {
  Query: {
    Videos: () => videos
  }
};

module.exports = resolvers;
