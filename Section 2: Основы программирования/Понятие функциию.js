// function

// function sum(){
//     console.log('Hello from sum')
// }
// sum();

// function sum(a,b){
//     console.log('a',a)
//     console.log('b',b)
// }
// sum(1,2);
// sum(3,4);

// function sum(a,b){
    
//     // if(typeof a !== 'number'){
//     //     return NaN
//     // }
//     return a+b;
// }
// sum(1,2);
// sum(3,4);

function getNumberDate(guetion){
    while(true){
        const res = +prompt(guetion)

        if(guetion === 0 || guetion){
            return res;
        }
    }
}

const age = getNumberDate('сколько тебе лет?: ');
console.log(age)


const salary = getNumberDate('Какая у тебя зарплата? ');