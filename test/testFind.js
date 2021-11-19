
const moduleFind=require('../find');
const items = [1, 2, 3, 4, 5, 5];

let myFindFunction = moduleFind.find(items,function(value){
    return value==3;
});

console.log(myFindFunction);