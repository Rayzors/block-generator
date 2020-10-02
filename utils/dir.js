const fs = require('fs');

module.exports.readdir = async function (path) {
  return await fs.promises.readdir(path, { withFileTypes: true });
};
