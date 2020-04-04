const Configstore = require('configstore')

const logger = require('../utilities/logger')
const packageJson = require('../../package.json')

const add = (remoteName, url) => {
    if (!remoteName || !url) {
        logger.error('Improper input. Remote name and url Required.')
        return
    }

    const store = new Configstore(packageJson.name)

    const existingRemotes = store.get('remotes')
    const updatedRemotes = { ...existingRemotes, [remoteName]: url }

    store.set('remotes', updatedRemotes)
}

const remove = (remoteName) => {
    if (!remoteName) {
        logger.error('Improper input. Remote name required.')
        return
    }

    const store = new Configstore(packageJson.name)
    const remotes = store.get('remotes')

    delete remotes[remoteName]
    store.set('remotes', remotes)
}

const list = (show) => {
    if (!show) return

    const store = new Configstore(packageJson.name)
    const remotes = store.get('remotes')

    Object.keys(remotes).forEach((remoteName) => {
        logger.info(`${remoteName} - ${remotes[remoteName]}`)
    })
}

module.exports = {
    add,
    remove,
    list,
}
