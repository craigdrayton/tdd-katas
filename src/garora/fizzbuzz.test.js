import { describe, expect, it } from "@jest/globals";
import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("Should return an array with 100 elements", () => {
    const actual = fizzbuzz();
    expect(actual).toHaveLength(100);
  });

  it("Should return numbers between 1..100 (except for multiples of three or five)", () => {
    const actual = fizzbuzz();

    for (let i = 0; i < actual.length; i++) {
      const n = i + 1;
      if (n % 3 !== 0 && n % 5 !== 0) {
        expect(actual[i]).toEqual(n);
      }
    }
  });

  it("Should return 'FizzBuzz' for multiples of both three and five", () => {
    const actual = fizzbuzz();

    for (let i = 0; i < actual.length; i++) {
      const n = i + 1;
      if (n % 5 == 0 && n % 3 == 0) {
        expect(actual[i]).toEqual("FizzBuzz");
      }
    }
  });

  it("Should return 'Fizz' for multiples of three", () => {
    const actual = fizzbuzz();

    for (let i = 0; i < actual.length; i++) {
        const n = i + 1;
        if (n % 3 == 0 && n % 5 !== 0) {
          expect(actual[i]).toEqual("Fizz");
        }
    }
  });

  it("Should return 'Buzz' for multiples of five", () => {
    const actual = fizzbuzz();

    for (let i = 0; i < actual.length; i++) {
        const n = i + 1;
        if (n % 5 == 0 && n % 3 !== 0) {
          expect(actual[i]).toEqual("Buzz");
        }
    }
  });
});
