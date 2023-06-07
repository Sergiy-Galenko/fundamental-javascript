// Destructuring
const developer = [
    {
        id:1,
        fullName: 'Brad Pette',
        skils: ['HTML','CSS','JS'],
        area: 'front-end',
    },
    {
        id:2,
        fullName: 'Sergii Halenko',
        skils: ['HTML','CSS','JS','React'],
        area: 'back-end',
    },
    {
        id:3,
        fullName: 'Adam Smit',
        skils: ['HTML','PHP','Go'],
        area: 'front-end',
    },
    {
        id:4,
        fullName: 'Sam Wilson',
        skils: ['HTML','JavaScript','PHP','Go'],
        area: 'fullstack',
    },
];

const cities = ['London','Paris','Madrid','Lisabon','Kiev']

//const madrid = cities[0];
// const [london,paris,madrid,lisabon] = cities;
// console.log(london,paris,madrid,lisabon);
//const [london,, madrid,, kiev] = cities; 
const [
    lon,
    par,
     ...otherCities
] = cities || [];

console.log(lon,otherCities);

const numbers = [1,2,[3,4],10,23]

const [
    a = 0,
    b = 0,
    [c = 1,d = 1] = []
] = numbers;
console.log(a,b,c,d);


let x = 10;
let y = 20;
[x,y] = [y,x]
console.log(y);