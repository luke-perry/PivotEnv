const configstore = require('configstore')

const logger = require('../../utilities/logger')
const configActions = require('../config')

jest.mock('Configstore')
jest.mock('../../utilities/logger')

describe('configActions', () => {
    let mockSet

    beforeEach(() => {
        mockSet = jest.spyOn(configstore.prototype, 'set').mockReturnValue()
    })

    it('should store the value passed in a key value pair', () => {
        const sampleKey = 'user'
        const sampleValue = 'jdoe'

        configActions.setValue(sampleKey, sampleValue)

        expect(mockSet).toHaveBeenCalledWith(sampleKey, sampleValue)
    })

    it('should not allow for unsupported keys', () => {
        const invalidKey = 'meBadKey'

        configActions.setValue(invalidKey, '')

        expect(mockSet).not.toHaveBeenCalled()
        expect(logger.error).toHaveBeenCalledWith('configuration key: "meBadKey" not supported')
    })
})
