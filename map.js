
function map(elements,cb) {
  let arr = [];
  for (i = 0; i < elements.length; i++) {
    arr.push(cb(elements[i]));
  }

  return arr;
}

module.exports={map};