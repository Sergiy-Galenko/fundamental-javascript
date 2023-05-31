//RegExp

const regexp1 = /\w+/;
const regexp2 = new RegExp('\\w+');

const str = 'JavaScript is cool language. Evrybody should learn JavaScript';
console.log(/JavaScript/.test(str));
console.log(/javascript/i.test(str));

console.log(str.replace(/javascript/ig, 'php'));

console.log(str.match(/javascript/ig));