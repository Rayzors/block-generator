const {copySync, existsSync } = require('fs-extra');
const path = require('path');
const formatSagePathWithTheme = require('../utils/formatSagePathWithTheme')
const { GLOBAL_ENV_PATH, PROJECT_ACF_PATH, PROJECT_ASSETS_PATH } = require('../path.js');
const {
  saveDependencies,
  getBlockDependencies,
} = require('../utils/dependencies.js');

module.exports = function ({ env, theme }, { blockname, acfPath, templateFiles, assetsPath, dependenciesPath }) {
  return new Promise((resolve, reject) => {
    const blockPath = path.resolve(__dirname, '../', `blocks/${blockname}/${env}`);
    if (!existsSync(blockPath)){
      reject(`Le block ${blockname} n'existe pas pour ${env}`);
    }

    //copy ACF
    const ACFDestFile = path.join(PROJECT_ACF_PATH[env], path.basename(acfPath));
    const blockACFPath = path.resolve(__dirname, '../', acfPath);
    if (existsSync(blockACFPath)) {
      copySync(blockACFPath, ACFDestFile);
    }

    //copy other directories
    const blockTemplateFiles = path.resolve(__dirname, '../', templateFiles)
    if (existsSync(blockTemplateFiles)) {
      copySync(blockTemplateFiles, formatSagePathWithTheme(GLOBAL_ENV_PATH[env], theme));
    }

    //copy assets
    const blockAssetsPath = path.resolve(__dirname, '../', assetsPath)
    if (existsSync(blockAssetsPath)) {
      copySync(blockAssetsPath, formatSagePathWithTheme(PROJECT_ASSETS_PATH[env], theme));
    }

    //retrieve blocks dependence
    const blockDependenciesPath = path.resolve(__dirname, '../', dependenciesPath)
    const { [env]: dependencies } = getBlockDependencies(blockDependenciesPath);

    //stock dependencies to install them later
    saveDependencies(dependencies);

    resolve(`${blockname} installé !`);
  })
};
