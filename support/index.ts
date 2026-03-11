require('./commands.ts')
require('./ai.ts')
require('cypress-mochawesome-reporter/register')

// Register image snapshot command teset
const { addMatchImageSnapshotCommand } = require('cypress-image-snapshot/command')
addMatchImageSnapshotCommand()
