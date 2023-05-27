// Array (basics)
const numbers = [1,2,3,4,5];
console.log(numbers[0]);
numbers[0] = 5
console.log(numbers[0]);
console.log(numbers.length);
console.log(numbers[numbers.length -1])


const strs = ['abc','bcd'];
// strs[2] = 'hello'
// console.log(strs);
// strs.push('Hello') // Добавляет елемент в конец масива 
// console.log(strs)
strs.pop()// Удаляет елементы з конца списка
console.log(strs);