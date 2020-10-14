import {FizzBuzz} from '../src/fizzbuzz'
import {expect} from 'chai'

describe('fizzbuzz', () => {
  it('should be divisible by 3 and replace number with Fizz', () => {
    let fizzbuzz = new FizzBuzz()
    expect(fizzbuzz.replaceNumber(3)).to.equal("Fizz")
    expect(fizzbuzz.replaceNumber(6)).to.equal("Fizz")

  })


  it('should be divisible by 5 and replace number with Buzz', () => {
    let fizzbuzz = new FizzBuzz()
    expect(fizzbuzz.replaceNumber(5)).to.equal("Buzz")
    expect(fizzbuzz.replaceNumber(10)).to.equal("Buzz")

  })



  it('should return a number if it is neither divisible by 3,5,15', () => {
    let fizzbuzz = new FizzBuzz()
    expect(fizzbuzz.replaceNumber(4)).to.equal('4')
    expect(fizzbuzz.replaceNumber(15)).to.equal('15')



  })
})
