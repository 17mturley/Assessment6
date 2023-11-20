const shuffle = require("../src/shuffle");

describe('shuffle', () => {
  it('should return an array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(Array.isArray(shuffledArray)).toBe(true);
  });
});

describe('shuffle', () => {
  it('should shuffle the items in the array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(inputArray);
    expect(Array.isArray(shuffledArray)).toBe(true);
    expect(shuffledArray).not.toEqual(inputArray);
  });
});