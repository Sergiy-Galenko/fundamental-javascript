// Scope

let isValid = false;
const str = 'Hello'

function isString(str){
    const isValid = typeof str === 'string';
    return isValid; 
}

const res = isString('123');
console.log(res);

let message = '';
const age = 15;

if (age >= 18){
    message = 'Hello'
}else{
    message = 'Adios'
}