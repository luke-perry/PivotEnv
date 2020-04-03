const { setupOptions, setupCommands } = require('../setup')

describe('setupHelper', () => {
    let sampleYargs

    describe('#setupOptions', () => {
        beforeEach(() => {
            sampleYargs = { option: jest.fn() }
        })

        it('call the yargs "option" function for each option in config provided', () => {
            const sampleOptions = [{ name: 'myOption', details: 'help' }, { name: 'fancyOption', details: 'help' }]

            setupOptions(sampleYargs, sampleOptions)

            expect(sampleYargs.option).toHaveBeenCalledWith(sampleOptions[0].name, sampleOptions[0].details)
            expect(sampleYargs.option).toHaveBeenCalledWith(sampleOptions[1].name, sampleOptions[1].details)
        })
    })

    describe('#setupCommands', () => {
        beforeEach(() => {
            sampleYargs = { command: jest.fn() }
        })

        it('call the yargs "command" function for each command in config provided', () => {
            const sampleCommands = ['myCommand', 'fancyCommand']

            setupCommands(sampleYargs, sampleCommands)

            expect(sampleYargs.command).toHaveBeenCalledWith('myCommand')
            expect(sampleYargs.command).toHaveBeenCalledWith('fancyCommand')
        })
    })
})
