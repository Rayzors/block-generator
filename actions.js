module.exports = function ({ blocks, env }) {
  const actions = blocks.map((blockname) => ({
    type: 'copy',
    abortOnFail: false,
    blockname,
    acfPath: `./blocks/${blockname}/${blockname}.json`,
    assetsPath: `./blocks/${blockname}/assets`,
    dependenciesPath: `./blocks/${blockname}/dependencies.yml`,
    templateFiles: `./blocks/${blockname}/${env}`,
  }));

  actions.push('Installation des dépendences', {
    type: 'installDependencies',
  });

  return actions;
}
