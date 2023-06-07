// Spred/ rest opertor
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

const numbers = [1,2,3,4,10,23]
const cities = ['London','Paris','Madrid','Lisabon']


// console.log(cities);
// console.log(...cities);

const arr2 = ['Riga',...cities,'Moscow'];
//console.log(arr2);

const dev1 = {
    id:1,
    fullName: 'Brad Pette',
    skils: ['HTML','CSS','JS'],
    area: 'front-end',
};

const dev2 =  {...dev1}
dev2.id = 2;
dev2.fullName = 'Sergii Halenko'; 
console.log(dev1);
console.log(dev2);


console.log(sum(4,5,6,8)); 
// args = []
function sum(a,b, ...args){
    let result = a+b;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }
    return result;

}
