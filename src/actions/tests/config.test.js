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
        const sampleValue = 'jdoe'

        configActions.setValue(invalidKey, sampleValue)

        expect(mockSet).not.toHaveBeenCalled()
        expect(logger.error).toHaveBeenCalledWith('configuration key: "meBadKey" not supported')
    })

    it('should error if there is no key provided', () => {
        const sampleValue = 'jdoe'

        configActions.setValue(undefined, sampleValue)

        expect(mockSet).not.toHaveBeenCalled()
        expect(logger.error).toHaveBeenCalledWith('Improper input. Key and value required.')
    })

    it('should error if there is no value provided', () => {
        const sampleKey = 'user'

        configActions.setValue(sampleKey, undefined)

        expect(mockSet).not.toHaveBeenCalled()
        expect(logger.error).toHaveBeenCalledWith('Improper input. Key and value required.')
    })
})
