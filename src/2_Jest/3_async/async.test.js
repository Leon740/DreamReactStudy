const Ajax = require("./async");

describe("Ajax echo", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });

  test("should return promise", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });

  test("should catch error in promise", () => {
    return Ajax.echo().catch((error) => {
      expect(error).toBeInstanceOf(Error);
    });
  });

  test("should catch error in promise", async () => {
    try {
      await Ajax.echo();
    } catch (error) {
      expect(error.message).toBe("Error");
    }
  });
});
