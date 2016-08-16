/* eslint-env mocha */

'use strict'

const test = require('interface-ipfs-core')
const IPFSFactory = require('../../utils/factory')

let factory

const common = {
  setup: function (cb) {
    factory = new IPFSFactory()
    cb(null, factory)
  },
  teardown: function (cb) {
    factory.dismantle(cb)
  }
}

test.generic(common)
