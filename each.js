
function each(elements,cb) {
  for (i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
}

module.exports = {each};
