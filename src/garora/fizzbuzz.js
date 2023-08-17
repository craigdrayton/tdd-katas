/**
 * Returns an array with numbers from 1 to 100,
 * where multiples of 3 are replaced by "Fizz",
 * multiples of 5 are replaced by "Buzz",
 * and multiples of both 3 and 5 are replaced by "FizzBuzz"
 */
export default fizzbuzz = () =>
  Array(100)
    .fill(null)
    .map((_, index) => {
      const n = index + 1;
      if (n % 3 == 0 && n % 5 == 0) return "FizzBuzz";
      if (n % 3 == 0) return "Fizz";
      if (n % 5 == 0) return "Buzz";
      return n;
    });
