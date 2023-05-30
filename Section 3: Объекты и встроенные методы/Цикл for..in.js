const developer = {
    name: 'Sergiy',
    surname: 'Halenko',
    age:30,
    skills: ['JavaScript','React','React-Native','TypeScript'],
    isMatied: false,
};

for (let prop in developer){
    console.log(prop, developer[prop]);
}