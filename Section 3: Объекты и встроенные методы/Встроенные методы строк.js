// string methods

const str = 'Hello world'

console.log(str.toLowerCase());// Переобразования до маленькой буквы
console.log(str.toUpperCase());// Переобразования до большой буквы

console.log(str.includes('world')); // Проверяет есть ли фраза в строке
console.log(str.indexOf('world')); //Пошук под строки

console.log(str.toLowerCase().includes('hello'));

console.log(str.slice(0,5)); // напризает строку по у казаным коорденатам 
console.log(str.slice(6)); 

console.log(str.split(' ').join(' ')); // Перетворить строку на масив принимает в себя розделитель (chaining )