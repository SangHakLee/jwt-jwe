'use strict'
const debug = require('debug')

const Jwt = require('../lib').default
console.log('Jwt', Jwt)

describe(`jwt-jwe`, () => {
  describe(`test`, () => {
    it(`1`, () => {
      const jwt = new Jwt()
      debug(jwt)
    })
  })
})
