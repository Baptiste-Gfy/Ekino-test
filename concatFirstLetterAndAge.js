const assert = require("assert");

function combineNameAge(firstname, lastname, age) {
  return `${firstname.slice(0, 2)}${lastname.slice(0, 2)}${age}`;
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof combineNameAge, "function");

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(combineNameAge.length, 3);

// Check that capitalizeFirstLetters transforms correctly
assert.strictEqual(combineNameAge("Baptiste", "Geffroy", 24), "BaGe24");
console.log("OK");
