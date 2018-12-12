describe('"Unique in order" function test', function() {

  it('AAAABBBCCDAABBB', function() {
    assert.deepEqual(unique_in_order('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
  })

  it('ABBCcAD', function() {
    assert.deepEqual(unique_in_order('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
  })

  it('[1,2,2,3,3]', function() {
    assert.deepEqual(unique_in_order([1, 2, 2, 3, 3]), [1, 2, 3])
  })

})
