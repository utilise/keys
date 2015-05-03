var expect = require('chai').expect
  , keys   = require('./')

describe('keys', function() {
  it('should convert object keys to array', function() {
    var o = { a: 1, b: 2}
    expect(keys(o)).to.eql(['a','b'])
  })
})