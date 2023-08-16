import { describe, expect } from "@jest/globals";
import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("Should return an array with 100 elements", () => {
    const actual = fizzbuzz();
    expect(actual).toHaveLength(100);
  });

  it("Should return 'Fizz' for multiples of three, ascending integers otherwise", () => {
    const actual = fizzbuzz();

    for (let i = 0; i < actual.length; i++) {
      if ((i + 1) % 3 == 0) {
        expect(actual[i]).toEqual("Fizz");
      } else {
        expect(actual[i]).toEqual(i + 1);
      }
    }
  });
});
