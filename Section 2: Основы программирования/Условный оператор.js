// Условный оператор

let age = 20;

if (age >= 18) {
    console.log('Access granted');
}else{
    console.log('Error');
}

let salary = 2000;
//if (salary > 1500) console.log("I need to improve");

if(salary > 3000){
    console.log("it's time to relax");
} else if (salary > 2500) {
    console.log('Well, good enough. But I can be better.');
}else if (salary >= 2000){
    console.log('I need in improve')
}else{
    console.log('Not enougt');
}