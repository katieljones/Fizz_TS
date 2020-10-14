import {FizzBuzz} from '../src/fizzbuzz'
import {expect} from 'chai'

describe('fizzbuzz', () => {
  it('should be divisible by 3 and replace number with Fizz', () => {
    let fizzbuzz = new FizzBuzz()
    expect(fizzbuzz.replaceNumber(3)).to.equal("Fizz")
  })


  it('should be divisible by 5 and replace number with Buzz', () => {
    let fizzbuzz = new FizzBuzz()
    expect(fizzbuzz.replaceNumber(5)).to.equal("Buzz")
  })
})
