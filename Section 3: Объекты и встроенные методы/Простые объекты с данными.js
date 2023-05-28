// Object

// const developer = {
//     key: value,
// };

const developer = {
    name: 'Sergiy',
    surname: 'Halenko',
    age:30,
    skills: ['JavaScript','React','React-Native','TypeScript'],
    isMatied: false,
};

developer.isMatied = true;

delete developer.age; // Краще не юзать

console.log(developer.name)

console.log(developer['name']);