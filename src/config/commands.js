const configActions = require('../actions/config')
const remoteActions = require('../actions/remotes')

module.exports = [
    {
        command: 'config <key> [value]',
        aliases: ['configure', 'cfg'],
        desc: 'Set config value',
        handler: (input) => {
            configActions.setValue(input.key, input.value)
        },
    },
    {
        command: 'remote',
        aliases: ['r'],
        desc: 'manage (add, remove, list) a remote ',
        builder: (yargs) => {
            yargs.command({
                command: 'remove <key>',
                desc: 'remove a remote',
                handler: (input) => {
                    remoteActions.remove(input.key)
                },
            })
            yargs.command({
                command: 'add <key> [value]',
                desc: 'add a remote',
                handler: (input) => {
                    remoteActions.add(input.key, input.value)
                },
            })
            yargs.option('list', {
                alias: 'l',
                describe: 'list remotes',
                type: 'boolean',
            })
        },
        handler: (input) => {
            remoteActions.list(input.list)
        },
    },
    {
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
            yargs.option('dangerous', {
                alias: 'd',
                describe: 'will overwrite envs already in scope',
                type: 'boolean',
            })
        },
        handler: (input) => {
            console.log(`retrieve from org ${input.org} and app ${input.app}`)
        },
    },
]
