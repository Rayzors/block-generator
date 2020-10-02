const { readdir } = require('./dir.js');
const path = require('path');

module.exports = async function getBlockList() {
  const files = await readdir(path.resolve(__dirname, '../blocks'));
  return files.filter((file) => file.isDirectory());
};
