const configstore = require('configstore')

const logger = require('../../utilities/logger')
const remoteActions = require('../remotes')

jest.mock('Configstore')
jest.mock('../../utilities/logger')

describe('remoteActions', () => {
    let mockSet
    let mockDelete

    beforeEach(() => {
        mockSet = jest.spyOn(configstore.prototype, 'set').mockReturnValue()
        mockDelete = jest.spyOn(configstore.prototype, 'delete').mockReturnValue()
    })

    describe('#add', () => {
        it('should store the remote provide with by its name', () => {
            const sampleRemoteName = 'default'
            const sampleRemoteUrl = 'www.PCF.com'

            remoteActions.add(sampleRemoteName, sampleRemoteUrl)

            expect(mockSet).toHaveBeenCalledWith(sampleRemoteName, sampleRemoteUrl)
        })

        it('should error if there is no remote name provided', () => {
            const sampleRemoteUrl = 'www.PCF.com'

            remoteActions.add(undefined, sampleRemoteUrl)

            expect(mockSet).not.toHaveBeenCalled()
            expect(logger.error).toHaveBeenCalledWith('Improper input. Remote name and url Required.')
        })

        it('should error if there is no url value provided', () => {
            const sampleRemoteName = 'default'

            remoteActions.add(sampleRemoteName, undefined)

            expect(mockSet).not.toHaveBeenCalled()
            expect(logger.error).toHaveBeenCalledWith('Improper input. Remote name and url Required.')
        })
    })
})
