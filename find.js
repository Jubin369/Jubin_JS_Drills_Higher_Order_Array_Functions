
function find(elements, cb) {
  for (i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return i;
    }
  }
  return;
}

module.exports={find};