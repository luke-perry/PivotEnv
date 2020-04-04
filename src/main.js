#!/usr/bin/env node
const yargs = require('yargs')

const { setupOptions, setupCommands } = require('./helpers/setup')
const options = require('./config/options')
const commands = require('./config/commands')

setupOptions(yargs, options)
setupCommands(yargs, commands)

const test = yargs.argv
