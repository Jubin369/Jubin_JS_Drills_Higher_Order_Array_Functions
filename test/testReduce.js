const items = [1, 2, 3, 4, 5, 5];
const moduleReduce = require('../reduce');

let startingValue=3;
let myReduce = moduleReduce.reduce(items, function(acc, value){

   return acc + value;
   
},startingValue);

console.log(myReduce);
