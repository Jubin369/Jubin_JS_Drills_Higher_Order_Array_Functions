const elements = [1, 2, 3, 4, 5, 5];
let result = reduce(elements);

console.log(result);

function reduce(elements, startingValue) {
  if (startingValue == undefined) startingValue = elements[0];
  else startingValue += elements[0];
  for (i = 1; i < elements.length; i++) {
    startingValue += elements[i];
  }

  return startingValue;
  // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
}
