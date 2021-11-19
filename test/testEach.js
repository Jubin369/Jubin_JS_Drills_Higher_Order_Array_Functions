const items = [1, 2, 3, 4, 5, 5];

const moduleForEach = require('../each.js');

moduleForEach.each(items, function(val, index){
    console.log(index + ":" + val + "\n")});

