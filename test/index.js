var should = require('chai').should(),
  eviljs = require('../index')

describe('Evil genius do the math', function () {
  it('should do the math', function () {
    eviljs('1 * 2').should.equal(2)
  })
})

