// Recursion

// Функция вызивает сама себя 
// Базовое условие (терминальное)
// Правела движения по рекурсии 

// function recurse(){
//     return recurse();
// }

// // Факториал числа 
// function factorial(n){
//     if (n === 0) return 1;
//     return n * factorial(n  - 1);
// }
// console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 => sum()


let country = 0;
// принимает символ и возвращает этот символ в пяти екземплярах
function repeate(char){
    country++;
    if (country === 5){
        country = 0;
        return char;
    }
    return char + repeate(char);
} 
console.log(repeate('x'));