const path = require('path')
const { GLOBAL_ENV_PATH } = require('../path')
const {
  getDependencies,
  installJSDependencies,
  installPHPDependencies
} = require('../utils/dependencies.js')
const formatSagePathWithTheme = require('../utils/formatSagePathWithTheme')

module.exports = function ({ env, theme }) {
  return new Promise((resolve, reject) => {
    // get stocked dependencies
    const { js: jsDependencies, php: phpDependencies } = getDependencies()

    if (phpDependencies && jsDependencies) {
      reject(new Error('Aucune dépendence à installer.'))
    }

    // intall dependencies
    const cwd = path.resolve(process.cwd(), formatSagePathWithTheme(GLOBAL_ENV_PATH[env], theme))
    phpDependencies && installPHPDependencies(phpDependencies, cwd)
    jsDependencies && installJSDependencies(jsDependencies, cwd)

    resolve('Dépendences installées !')
  })
}
