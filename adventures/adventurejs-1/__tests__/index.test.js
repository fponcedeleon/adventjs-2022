const wrapping = require("..");

describe("Adventurejs - 1", () => {
  it("should wrap nothing when nothing to wrap", () => {
    expect(wrapping([])).toEqual([]);
  });
  it("should wrap one gift with one letter", () => {
    expect(wrapping(["a"])).toEqual(["***\n*a*\n***"]);
  });
  it("should wrap one gift with n letters", () => {
    expect(wrapping(["one"])).toEqual(["*****\n*one*\n*****"]);
    expect(wrapping(["aLargeGift"])).toEqual([
      "************\n*aLargeGift*\n************",
    ]);
  });
  it("should wrap multiple gifts with n letters", () => {
    expect(wrapping(["one", "two", "three"])).toEqual([
      "*****\n*one*\n*****",
      "*****\n*two*\n*****",
      "*******\n*three*\n*******",
    ]);
  });
});
