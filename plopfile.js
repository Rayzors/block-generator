const prompts = require('./questions')
const actions = require('./actions')
const copyBlockAction = require('./actionsType/copy.js')
const installDependenciesAction = require('./actionsType/installDependencies.js')

module.exports = function (plop) {
  plop.setActionType('copy', copyBlockAction)
  plop.setActionType('installDependencies', installDependenciesAction)
  plop.setGenerator('blocs', {
    description: 'Generation de blocs',
    prompts,
    actions
  })
}
