
const items = [1, 2, 3, 4, 5, 5];
const moduleFilter=require('../filter');

let result = moduleFilter.filter(items,function(value){
    return value<4;
});
console.log(result);
