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
//const front = developer.find(item => item.area === 'front-end')
//console.log(front);

// const front = developer.find(item => item.skils.includes('React'))
// console.log(front);

const front = developer.findIndex(item => item.skils.includes('React'))
console.log(front);

// const cities = ['London','Paris','Madrid','Lisabon']
// cities.includes('London') //True
// cities.indexOf('London') // 1