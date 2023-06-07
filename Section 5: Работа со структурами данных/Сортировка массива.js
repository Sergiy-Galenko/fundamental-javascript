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

//numbers.sort((a,b) => a - b); // от меньшого до большго
// numbers.sort((a,b) => b - a); // от  большго до меньшого 
// numbers.reverse()
// console.log(numbers);

// cities.sort(sorting)
// console.log(cities);

developer.sort((a,b) => sorting(a.area,b.area))
console.log(developer);
function sorting(a,b){
    if (a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }

    return 0;
}