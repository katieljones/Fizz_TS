export class FizzBuzz {

  generate(number: number) {
    let output: string[];
    for (let i = 1; i <= number; i++) {
        output.push(this.replaceNumber(i));
    }
    return output;
  }
  replaceNumber(number: number): string {
    if(number%3===0 && number%5===0) return "FizzBuzz";
    if(number%3===0) return "Fizz";
    if(number%5===0) return "Buzz";
    else return `${number}`;

  }
}
