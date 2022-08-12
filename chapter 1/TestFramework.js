const { sum, subtract } = require("./simpleMaths");

const test = (title, callback) => {
    try {
      callback();
      console.log(`☑ ${title}`);
    } catch (error) {
      console.error(`❌ ${title}`);
      console.error(error);
    }
  };
  
  const expect = (actual) => {
    return {
      toBe: (expected) => {
        if (actual !== expected) {
          throw new Error(`Error ${actual} is not equal to ${expected}`);
        }
      },
    };
  };

let result, expected;

const sumTest = () => {
  result = sum(7, 3);
  expected = 10;
  expect(result).toBe(expected);
};

test("sum adds numbers", sumTest);

const subtractTest = () => {
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
};

test("subtract minus numbers", subtractTest);


