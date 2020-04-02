#!/usr/bin/env node
const { argv } = require('yargs')
    .option('dangerous', {
        alias: 'd',
        describe: 'will overwrite envs already in scope',
        type: 'boolean',
    })
    .command({
        command: 'config <key> [value]',
        aliases: ['configure', 'cfg'],
        desc: 'Set config value',
        handler: (input) => {
            console.log(`setting ${input.key} to ${input.value}`)
        },
    })
    .command({
        command: 'remote <action> <key> [value]',
        aliases: ['r'],
        desc: 'manage (add, remove) a remote ',
        builder: (yargs) => {
            yargs.command({
                command: 'add <key> [value]',
                desc: 'add a remote',
                handler: (input) => {
                    console.log(`add remote ${input.key} to ${input.value}`)
                },
            })
        },
    })
    .command({
        command: 'get',
        desc: 'Retrieve envs',
        builder: (yargs) => {
            yargs.option('org', {
                alias: 'organization',
                describe: 'Org to retrieve values',
                type: 'string',
            })
            yargs.option('app', {
                alias: 'application',
                describe: 'App to retrieve values',
                type: 'string',
            })
        },
        handler: (input) => {
            console.log(`retrieve from org ${input.org} and app ${input.app}`)
        },
    })
    .alias('version', 'v')
    .alias('help', 'h')
    .help()

console.log('---------- hello world', argv)
