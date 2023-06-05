// Filter
const numbers  = [1,2,3,4,5,6,7,8];
const users = [
    {
        id:1,
        name: 'Brad Pette',
        movis: ['Harry','Karrl'],
        isMarried: true,
    },
    {
        id:2,
        name: 'Sergiy Halenko',
        movis: ['Karrl'],
        isMarried: false,
    },
    {
        id:3,
        name: 'Nazar Karl III',
        movis: ['Karrl'],
        isMarried: true,
    },
    {
        id:4,
        name: 'Victor',
        movis: ['Karrl'],
        isMarried: false,
    },
];

// const oddNumbers = numbers.filter(num => num % 2 !== 0); // [ 1, 3, 5, 7 ]
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [ 2, 4, 6, 8 ]
// console.log(oddNumbers);
// console.log(evenNumbers);
// console.log(numbers);

const marriedUsers = users.filter(user => user.isMarried);
console.log(marriedUsers);

// includes 
const movisUsers = users.filter(user => user.movis.includes('Harry'))
console.log(movisUsers);

