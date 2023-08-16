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
