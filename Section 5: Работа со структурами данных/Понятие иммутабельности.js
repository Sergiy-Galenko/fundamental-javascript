// Immutable
const arr = [1,2,3,4,5]; 

// don`t use pop, push, shift, unshift, sort, reverse 

const newArr = arr.slice(0, arr.length); // [1,2,3,4,5]
const newArr2 = [0,...arr]; // [ 0, 1, 2, 3, 4, 5 ]

const obj = {
    a: 1,
    b: 2,
    c: 3,
}
//obj.d = 4 // mutation
//obj.a = 10 // mutation

const obj2 = {
    ...obj,
    a:10,
    d: 9,
}; // { a: 10, b: 2, c: 3, d: 9 }
console.log(obj2);