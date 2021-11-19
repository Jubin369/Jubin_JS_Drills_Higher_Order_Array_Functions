
function reduce(elements,cb, startingValue) {
  let accumulator;
  if (startingValue == undefined) 
    accumulator = elements[0];
  else 
    accumulator = startingValue;
  for (i = 0; i < elements.length; i++) {
    accumulator = cb(accumulator, elements[i]);
  }

  return accumulator;
  }

  module.exports = {reduce};