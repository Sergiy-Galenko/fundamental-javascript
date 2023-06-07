Number("13"); // 13
Number(true); // 1
Number(false); // 0
String(000); //'0'
String(123); // '123'
Boolean(""); // false
Boolean("23"); //true
Boolean([]); //true
//Object.create();
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.entries(obj));
Array.isArray(obj) // false
Array.isArray([]) // true
console.log( Array.from('Hello world')); //[ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
console.log(Array.of('Hello world')); // [ 'Hello world' ]
console.log(Array.of(1,2,4)); //[ 1, 2, 4 ]