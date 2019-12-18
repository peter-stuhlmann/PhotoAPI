const { imageList } = require('./images');

exports.images = imageList.map(entry => {
  return {
    id: entry.id,
    src: entry.src,
    title: entry.title,
    alt: entry.alt,
    category: entry.category,
    width: entry.width,
    height: entry.height,
  };
});
