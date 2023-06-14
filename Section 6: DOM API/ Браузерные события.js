const title = $0;
// что бы навесить события нужно использовать onclick = "fn1()"
function fn1(){
    console.log('event!!!!');
}

title.onmouseenter = fn1; // работает при каждом навиденее мышки на какой-то обьект 


title.addEventListner('click',fn1); // устанавливаем обработчик события 

 