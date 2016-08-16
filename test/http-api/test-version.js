/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const APIctl = require('ipfs-api')
const pkgversion = require('../../package.json').version

module.exports = (httpAPI) => {
  describe('version', () => {
    describe('api', () => {
      let api

      it('api', () => {
        api = httpAPI.server.select('API')
      })

      it('get the version', (done) => {
        api.inject({
          method: 'GET',
          url: '/api/v0/version'
        }, (res) => {
          expect(res.result.version).to.equal(pkgversion)
          expect(res.result).to.have.a.property('commit')
          expect(res.result).to.have.a.property('repo')
          done()
        })
      })
    })

    describe('gateway', () => {})

    describe.skip('using js-ipfs-api', () => {
      var ctl

      it('start IPFS API ctl', (done) => {
        ctl = APIctl('/ip4/127.0.0.1/tcp/6001')
        done()
      })

      it('get the version', (done) => {
        ctl.version((err, result) => {
          expect(err).to.not.exist
          expect(result).to.have.a.property('version')
          expect(result).to.have.a.property('commit')
          expect(result).to.have.a.property('repo')
          done()
        })
      })
    })
  })
}
