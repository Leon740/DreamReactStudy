const expect = (actualValue) => {
  return {
    toBe: (expectedValue) => {
      if (actualValue === expectedValue) {
        console.log("Success");
      } else {
        console.log(
          `Actual value ${actualValue} is not the expected value ${expectedValue}`
        );
      }
    },
  };
};

const sum = (a, b) => a + b;

const nativeNull = () => null;

console.log(expect(sum(41, 1)).toBe(42));

module.exports = { sum, nativeNull };
