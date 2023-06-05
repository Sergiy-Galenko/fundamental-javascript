// Maping
// map, forEach

const numbers = [1,2,3,4,5,6,7,8];


// const arr = [];
// function doubleNum(num){
//     arr.push(num * 2)
// }

function print(el){
    console.log(el);
}
// function print(el,index, arr){
//     console.log(arr[index]);
// }

// const result = numbers.forEach(print);
// console.log(result);
// console.log(numbers);

function doubleNum(num){
    return num * 2
}

//const result = numbers.map(doubleNum); // [2,  4,  6,  8, 10, 12, 14, 16]
const result = numbers.map(num => num * 2); // [2,  4,  6,  8, 10, 12, 14, 16]
console.log(result);
console.log(numbers);