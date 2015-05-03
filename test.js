var expect = require('chai').expect
  , keys   = require('./es5')

describe('keys', function() {
  it('should convert object keys to array', function() {
    var o = { a: 1, b: 2}
    expect(keys(o)).to.eql(['a','b'])
  })
})