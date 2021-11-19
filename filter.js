const elements = [1, 2, 3, 4, 5, 5];
let result = filter(elements, 4);

console.log(result);

// filter function checking values above 4;
function filter(elements, cb) {
  let arr = [],
    foundIndex = 0;

  for (i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      arr[foundIndex++] = elements[i];
    }
  }

  return arr;
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
}
