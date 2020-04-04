const { createLogger, format, transports } = require('winston')
const chalk = require('chalk')

const logger = createLogger({
    level: 'info',
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize(),
                format.printf(
                    (info) => {
                        if (info) {
                            return `${chalk.white.bgRed.bold(' error ')} ${info.message}`
                        }
                        return `${info.message}`
                    },
                ),
            ),
        }),
    ],
})

module.exports = logger
