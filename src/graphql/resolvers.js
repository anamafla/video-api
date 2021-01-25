// TO DO : Fix the route of data
const videos = require("../data/data");
const sections = require("../data/data-section");

const resolvers = {
  Query: {
    videos: () => videos,
    video: (_, { id }) => videos.find(video => video.id == id),
    sections: () => sections
  },
  Mutation: {
    updateVideo: (_, args) => {
      const video = videos.find(video => video.id == args.id);

      if (!video) throw new Error("Video not found");

      if (typeof args.description !== "undefined")
        video.description = args.description;
      if (typeof args.videoUrl !== "undefined") video.videoUrl = args.videoUrl;

      if (typeof args.subtitle !== "undefined") video.subtitle = args.subtitle;

      if (typeof args.thumb !== "undefined") video.thumb = args.thumb;

      if (typeof args.name !== "undefined") video.name = args.name;

      if (typeof args.slug !== "undefined") video.slug = args.slug;

      if (typeof args.duration !== "undefined") video.duration = args.duration;

      if (typeof args.sort !== "undefined") video.sort = args.sort;

      if (typeof args.isCompleted !== "undefined")
        video.isCompleted = args.isCompleted;

      if (typeof args.category !== "undefined") video.category = args.category;

      return video;
    }
  }
};

module.exports = resolvers;
