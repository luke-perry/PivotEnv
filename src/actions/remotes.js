const Configstore = require('configstore')

const logger = require('../utilities/logger')
const packageJson = require('../../package.json')

const add = (remoteName, url) => {
    if (!remoteName || !url) {
        logger.error('Improper input. Remote name and url Required.')
        return
    }

    const store = new Configstore(packageJson.name)
    store.set(remoteName, url)
}

module.exports = {
    add,
}
