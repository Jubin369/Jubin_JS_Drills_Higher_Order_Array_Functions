const items = [1, 2, 3, 4, 5, 5];
const moduleMap=require('../map.js');

let newResult= moduleMap.map(items,function(value){
    return value+3;
    });
console.log(newResult );
