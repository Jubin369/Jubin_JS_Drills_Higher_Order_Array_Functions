// filter function for fillter
function filter(elements, cb) {
  let arr = [],
    foundIndex = 0;

  for (i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      arr[foundIndex++] = elements[i];
    }
  }

  return arr;

}

module.exports={filter};
