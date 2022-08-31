const { array } = require("prop-types");
const Lodash = require("./sync");

describe("Lodash compact", () => {
  let _ = new Lodash();
  let array;

  // beforeEach
  // afterEach
  // beforeAll
  // afterAll

  beforeEach(() => {
    // Problem:
    // Some test may modifiy the working area and other test may fail because of this
    // Solution:
    // Define working area before each test
    array = [false, null, "", undefined, 42];
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should add 'one', 'two' to array", () => {
    array.push(...["one", "two"]);
    expect(array).toContain("one");
    expect(array).toContain("two");
  });

  test("should remove falsy values from array", () => {
    const result = [42];
    // toBe = for primitives
    // toEqual = for deep data (objects, arrays)
    expect(_.compact(array)).toEqual(result);
  });

  test("should NOT containt falsy values in array", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(undefined);
    expect(_.compact(array)).toContain(42);
  });
});
