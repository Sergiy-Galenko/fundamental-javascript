// Higher order function
// Callback functions

// function twoSquared(){
//     return 2 * 2;
// }
// twoSquared()

// function threeSquared(){
//     return 3 * 3;
// }
// threeSquared()

// Пареметер
function numSquared(num) {
  return num * num;
}

// function copyArrayAddSquaredNums(arr) {
//   const output = [];
//   for (let i; i < arr.length; i++) {
//     output.push(arr[i] ** 2);
//   }
// }

// function copyArrayAndDivideByTwo() {
//   const output = [];
//   for (let i; i < arr.length; i++) {
//     output.push(arr[i] / 2);
//   }
// }

function copyArrayAddDoSmth(arr,intructions){
    const output = [];
    for (let i; i < arr.length; i++) {
      output.push(intructions(arr[i]));
    }
}

function numSquared(num) {
    return num * num;
}

function divieBy2(num){
    return num / 2;
}

const result = copyArrayAddDoSmth([1,2,3],numSquared);
const result2 = copyArrayAddDoSmth([10,20,30], divieBy2);