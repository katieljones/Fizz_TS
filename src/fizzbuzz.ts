export class FizzBuzz {

  replaceNumber(number: number): string {
    if(number%3===0) return "Fizz";
    if(number%5===0) return "Buzz";
  }
}
