const YAML = require('yaml')
const fs = require('fs')
const { exec } = require('child_process')

const dependenciesState = {}

function getDependencies () {
  return dependenciesState
}

function getBlockDependencies (path) {
  const file = fs.readFileSync(path, 'utf8')
  return YAML.parse(file)
}

function saveDependencies (dependencies) {
  for (const type in dependencies) {
    dependenciesState[type] = [
      ...(dependenciesState[type] || []),
      ...dependencies[type]
    ]

    dependenciesState[type] = [...new Set(dependenciesState[type])]
  }
}

function installJSDependencies (dependenciesArray, cwd) {
  if (!dependenciesArray) return

  const dependencies = dependenciesArray.join(' ')
  exec(`yarn add ${dependencies}`, { cwd })
}

function installPHPDependencies (dependenciesArray, cwd) {
  if (!dependenciesArray) return

  const dependencies = dependenciesArray.join(' ')
  exec(`composer require ${dependencies}`, { cwd })
}

module.exports = {
  installJSDependencies,
  installPHPDependencies,
  getBlockDependencies,
  getDependencies,
  saveDependencies
}
