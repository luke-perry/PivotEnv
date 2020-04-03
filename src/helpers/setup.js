const setupOptions = (yargs, options) => {
    options.forEach((op) => {
        yargs.option(op.name, op.details)
    })
}

const setupCommands = (yargs, commands) => {
    commands.forEach((cmd) => {
        yargs.command(cmd)
    })
}

module.exports = {
    setupOptions,
    setupCommands,
}
