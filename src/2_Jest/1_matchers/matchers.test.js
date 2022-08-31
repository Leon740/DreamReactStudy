const { sum, nativeNull } = require("./matchers");
// Common
// describe = group tests based on the sense
// toBe = for primitives
// toEqual = for deep data (objects, arrays)
// not

// Truthiness
// toBeNull
// toBeDefined
// toBeUndefined
// toBeTruthy
// toBeFalsy
describe("Truthiness", () => {
  test("null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeUndefined();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).not.toBeTruthy();
  });
});

// Numbers
// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
// toBeCloseTo
describe("Numbers", () => {
  test("two integers", () => {
    expect(sum(41, 1)).toBe(42);
    expect(sum(41, 1)).toEqual(42);
  });

  test("two integers comparing to another value", () => {
    expect(sum(41, 1)).toBeGreaterThan(41);
    expect(sum(41, 1)).toBeGreaterThanOrEqual(42);
    expect(sum(41, 1)).toBeLessThan(43);
    expect(sum(41, 1)).toBeLessThanOrEqual(42);
    expect(sum(41, 1)).not.toBe(43);
    expect(sum(41, 1)).not.toBeLessThan(42);
    expect(sum(41, 1)).not.toBeLessThanOrEqual(41);
  });

  test("two floats", () => {
    // expect(sum(0.1, 0.2)).toBe(0.3); // This won't work because of rounding error
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

// Strings
// toMatch
test("Strings", () => {
  expect("Javascript").toMatch(/script/);
  expect("Javascript").not.toMatch(/php/);
});

// Arrays
// toContain
const array = ["apple", "orange", "banana"];

test("Array", () => {
  expect(array).toContain("orange");
  expect(array).not.toContain("strawberry");
});

// Exceptions
// toThrow
const positiveSum = (a, b) => {
  if (a > 0 && b > 0) {
    return a + b;
  } else {
    throw new Error("Operands are negative");
  }
};

test("Exceptions", () => {
  expect(() => positiveSum(-1, -2)).toThrow();
  expect(() => positiveSum(1, 2)).not.toThrow();
  expect(() => positiveSum(-1, -2)).toThrow(Error);
  expect(() => positiveSum(-1, -2)).toThrow(/negative/);
});
