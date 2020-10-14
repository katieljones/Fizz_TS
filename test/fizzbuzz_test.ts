import {FizzBuzz} from '../src/fizzbuzz'
import {expect} from 'chai'

describe('fizzbuzz', () => {
  it('should be divisible by 3 and replace number with Fizz', () => {
    let fizzbuzz = new FizzBuzz()
    expect(fizzbuzz.getWord(3)).to.equal("Fizz")
  })
})
