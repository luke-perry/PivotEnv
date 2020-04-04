const Configstore = require('configstore')

const logger = require('../utilities/logger')
const packageJson = require('../../package.json')

const setValue = (key, value) => {
    const supportedKeys = ['user']

    if (!supportedKeys.includes(key)) {
        logger.error(`configuration key: "${key}" not supported`)
        return
    }

    const store = new Configstore(packageJson.name)
    store.set(key, value)
}

module.exports = {
    setValue,
}
