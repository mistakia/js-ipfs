'use strict'

const {
  waitForOutput
} = require('../utils')

async function runTest () {
  await waitForOutput('protocolVersion', 'npm', ['run', 'start'], {
    cwd: __dirname
  })
}

module.exports = runTest
