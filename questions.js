const getBlockList = require('./utils/getBlockList.js');

module.exports = [
    {
        type: 'list',
        name: 'env',
        message: "Choisissez l'environnement",
        choices: ['sage', 'nuxt'],
        default: 0,
    },
    {
        type: 'input',
        name: 'theme',
        message: "Dans quel thème voulez-vous installer les block ?",
        when: ({env}) => env === 'sage'
    },
    {
        type: 'checkbox',
        name: 'blocks',
        message: 'Quels blocs voulez-vous installer ?',
        choices: async _ => await getBlockList(),
        validate: block => block.length < 1 ? 'You have to choose at least one block' : true
    },
];