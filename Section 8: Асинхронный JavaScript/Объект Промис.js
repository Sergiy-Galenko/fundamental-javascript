// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     // Expected output: "foo"
//   });
  
//   console.log(promise1);
  // Expected output: [object Promise]

//   ожидание (pending): начальное состояние, не исполнен и не отклонён.
//   исполнено (fulfilled): операция завершена успешно.
//   отклонено (rejected): операция завершена с ошибкой


function withPromise(){
    return new Promise((resolve, reject) => {
        resolve('Hello from new Promise');
    })
}

console.log('Hi there,me first');

setTimeout(() => console.log('When in my turn'),0);
withPromise().then(console.log).catch(value => console.log(value + '!!!!'));

console.log('Am I last in the queue');