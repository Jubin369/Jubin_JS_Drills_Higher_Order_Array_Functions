const elements = [1, 2, 3, 4, 5, 5];
let result = map(elements);

console.log(result);

function map(elements) {
  let arr = [];
  for (i = 0; i < elements.length; i++) {
    arr[i] = cb(elements[i]);
  }

  return arr;
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
}

function cb(item) {
  return item * 3;
}
