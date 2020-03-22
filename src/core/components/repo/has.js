'use strict'

module.exports = ({ repo }) => {
  return async function has (cid) {
    return repo.blocks.has(cid)
  }
}
