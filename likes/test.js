describe('"Likes" function test for result equals', function() {

  it('Empty array', function() {
    assert.equal(likes([]), 'no one likes this')
  })

  it('One name', function() {
    assert.equal(likes(['Peter']), 'Peter likes this')
  })

  it('Two names', function() {
    assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
  })

  it('Three names', function() {
    assert.equal(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
  })

  it('More names', function() {
    assert.equal(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')
  })

})
