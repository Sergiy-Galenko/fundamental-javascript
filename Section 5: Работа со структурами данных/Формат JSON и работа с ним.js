// JSON - JavaScript Object Notation

const a = `{
    "firstName" : "Sergiy Halenko",
    "age":19,
    "skils": ["CSS"],
    "language":{
        "key":"velue"
    }
}`
const obj = {
    a:1,
    print(){console.log('Hello world');}
}
console.log(JSON.stringify(obj));
//console.log(String(obj)); 
// const myobj = JSON.parse(a)
// console.log(myobj);