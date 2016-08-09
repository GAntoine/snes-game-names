import {expect} from 'chai'
import snesNames from '.'

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    expect(snesNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(snesNames.random()).to.satisfy(isIncludedIn(snesNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
