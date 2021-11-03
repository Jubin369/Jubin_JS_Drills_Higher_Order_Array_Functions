const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

let result = flatten(nestedArray);

console.log(result);

function flatten(ary) {
  var ret = [];
  for (var i = 0; i < ary.length; i++) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(flatten(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}
