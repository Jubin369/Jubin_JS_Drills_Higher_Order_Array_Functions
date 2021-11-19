const nestedArray = [1, [2], [[3]], [[[5]]]];
const flat=require('../flatten');

let result=flat.flatten(nestedArray);
console.log(result);
