var fruits = ['apple', 'banana', 'malta', 'orange'];
var index = fruits.indexOf('banana');
fruits.splice(index, 1, 'mango');


var position = fruits.indexOf('orange');
fruits.splice(position, 1, 'watermelon');
console.log(fruits);



