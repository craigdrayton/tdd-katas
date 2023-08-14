import { describe, expect } from "@jest/globals";
import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("Should return numbers between 1 and 100", () => {
    const expected = [...Array(101).keys()].slice(1);
    const actual = fizzbuzz();
    expect(actual).toEqual(expected);
  });
});
