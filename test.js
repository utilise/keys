var expect = require('chai').expect
  , keys   = require('./')

describe('keys', function() {
  it('should convert object keys to array', function() {
    var o = { a: 1, b: 2 }
    expect(keys(o)).to.eql(['a','b'])
  })

  it('should default gracefully if falsy passed in', function() {
    expect(keys(undefined)).to.eql([])
    expect(keys(10)).to.eql([])
  })

  it('should work on functions', function() {
    String.foo = 'wat'
    expect(keys(String)).to.eql(['foo'])
  })

})