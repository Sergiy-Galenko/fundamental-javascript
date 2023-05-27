// Тринарный оператор (выражения)
const age = 18;

age >= 18 ? console.log('Access granted') : console.log('Access denied');
console.log('Access', age > 18 ? 'granted': 'denied');

//let isAbult = age >= 18;

let status = 'idle';
let statusNumber = status === 'idle' ? 0 : 1;
console.log({statusNumber});