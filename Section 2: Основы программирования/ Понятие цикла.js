// Loop (basics)
const number = [1,2,3,4,5,6,7];

let index = 0
while(index <= number.length-1){
    number[index] *= 2 // number[index] = number[index] * 2
    console.log(number[index])
    index += 1
}
console.log('Hello after while');