const assert = require("assert");

function upperLowerDigit(input) {
  const c = input[0];
  if (c.toUpperCase() === c) {
    return "upper";
  } else if (c.toLowerCase() === c) {
    return "lower";
  } else if (typeof parseInt(c) === typeof 2) {
    return "digit";
  } else {
    return "other";
  }
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof upperLowerDigit, "function");

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(upperLowerDigit.length, 1);

// Check that capitalizeFirstLetters transforms correctly
assert.strictEqual(upperLowerDigit("Baptiste"), "upper");
console.log("upper OK");
assert.strictEqual(upperLowerDigit("baptiste"), "lower");
console.log("lower OK");
assert.strictEqual(upperLowerDigit("435465767"), "digit");
console.log("digit OK");
assert.strictEqual(upperLowerDigit("@&dez"), "other");
console.log("other OK");
