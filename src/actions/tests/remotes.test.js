const configstore = require('configstore')

const logger = require('../../utilities/logger')
const remoteActions = require('../remotes')

jest.mock('Configstore')
jest.mock('../../utilities/logger')

describe('remoteActions', () => {
    let mockGet
    let mockSet

    beforeEach(() => {
        mockGet = jest.spyOn(configstore.prototype, 'get').mockReturnValue({})
        mockSet = jest.spyOn(configstore.prototype, 'set').mockReturnValue()
    })

    describe('#add', () => {
        it('should store the remote provide with by its name', () => {
            const sampleRemoteName = 'default'
            const sampleRemoteUrl = 'www.PCF.com'

            remoteActions.add(sampleRemoteName, sampleRemoteUrl)

            const exepectedStorageValue = { [sampleRemoteName]: sampleRemoteUrl }
            expect(mockGet).toHaveBeenCalledWith('remotes')
            expect(mockSet).toHaveBeenCalledWith('remotes', exepectedStorageValue)
        })

        it('should error if there is no url value provided', () => {
            const sampleRemoteUrl = 'www.PCF.com'

            remoteActions.add(undefined, sampleRemoteUrl)

            expect(mockSet).not.toHaveBeenCalled()
            expect(logger.error).toHaveBeenCalledWith('Improper input. Remote name and url Required.')
        })

        it('should error if there is no remote name provided', () => {
            const [sampleRemoteName] = 'default'

            remoteActions.add(sampleRemoteName, undefined)

            expect(mockSet).not.toHaveBeenCalled()
            expect(logger.error).toHaveBeenCalledWith('Improper input. Remote name and url Required.')
        })
    })

    describe('#remove', () => {
        it('should remove the specified remote', () => {
            const existingRemotes = { default: 'fancy' }
            mockGet = jest.spyOn(configstore.prototype, 'get').mockReturnValue(existingRemotes)
            const sampleRemoteName = 'default'

            remoteActions.remove(sampleRemoteName)

            expect(mockSet).toHaveBeenCalledWith('remotes', {})
        })

        it('should error if there is no remote name provided', () => {
            remoteActions.remove()

            expect(mockSet).not.toHaveBeenCalled()
            expect(logger.error).toHaveBeenCalledWith('Improper input. Remote name required.')
        })
    })

    describe('#list', () => {
        it('should print the remotes stored', () => {
            const sampleRemotes = { default: 'www.pivotal.com', upstream: 'www.amazon.com' }
            mockGet = jest.spyOn(configstore.prototype, 'get').mockReturnValue(sampleRemotes)

            remoteActions.list()

            expect(mockGet).toHaveBeenCalledWith('remotes')
            expect(logger.info).toHaveBeenCalledWith('name \t url')
            expect(logger.info).toHaveBeenCalledWith('default \t www.pivotal.com')
            expect(logger.info).toHaveBeenCalledWith('upstream \t www.amazon.com')
        })
    })
})
