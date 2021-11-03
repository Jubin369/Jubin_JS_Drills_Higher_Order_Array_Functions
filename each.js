const elements = [1, 2, 3, 4, 5, 5];
let result = each(elements);

function each(elements) {
  for (i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each
}

function cb(item, index) {
  console.log(index + ":" + item + "\n");
}
