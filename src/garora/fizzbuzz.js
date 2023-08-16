export default fizzbuzz = () =>
  Array(100)
    .fill(null)
    .map((_, index) => {
      if ((index + 1) % 3 == 0) return "Fizz";
      return index + 1;
    });
