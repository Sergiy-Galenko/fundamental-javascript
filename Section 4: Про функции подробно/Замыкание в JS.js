// Closur
// 1. Функции которые фозвращают другие функции.
// 2. Возвращаймая функция запоминает scope.

function hello(name){
    const helloName = () => console.log('Hello', name);

    return helloName; 
}

const helloVasy = hello('Vasy');
helloVasy();

const helloPety = hello('Pety');
helloPety();

function outer(){
    let country = 0;

    function incrementCounter(){
        console.log(++country);
    }

    return incrementCounter;
}

const myCounter1 = outer();
myCounter1();
myCounter1();

const myCounter2 = outer();
myCounter2();
myCounter2();