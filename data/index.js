const { imageList } = require('./images');

exports.images = imageList.map(entry => {
  return {
    id: entry.id,
    src: entry.src,
    title: entry.title,
    alt: entry.alt,
    category: entry.category,
    tags: entry.tags,
    date: entry.date,
    location: entry.location,
    model: entry.model,
    width: entry.width,
    height: entry.height,
    orientation: entry.orientation,
    grayscale: entry.grayscale,
  };
});
