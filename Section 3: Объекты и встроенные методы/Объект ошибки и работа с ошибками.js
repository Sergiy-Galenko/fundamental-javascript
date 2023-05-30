// errors

function sum(a,b){
    if (typeof a !== 'number' || typeof b !== 'number' ){
        throw new Error('В функцию не переданы числа для сложения');
    }
    return a+b
}

try{
    sum();
}catch(err){
    console.error(err.message);
}

console.log('end');