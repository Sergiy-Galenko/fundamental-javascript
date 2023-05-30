// array mathods

const number = [1,2,3,4];

//pop, push
//shift, unshift

console.log(number.includes(4)); //true
console.log(number.indexOf(4)); // Возвращает индекс елемента если он есть в масиве и -1 если нет в масиве

console.log(number.slice(0,2)); // Возвращает срез з масива [] не изменяет старый масив 

const num = number.concat([6,7,8]); // Обьеденения масивов в один масив

console.log(number.join(' ')); // Обьеденения в одну строку из указанимя розделителя 