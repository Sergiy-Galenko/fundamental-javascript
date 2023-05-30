const developer = {
    name: 'Sergiy',
    surname: 'Halenko',
    age:30,
    skills: ['JavaScript','React','React-Native','TypeScript'],
    isMatied: false,
    // addAge: function(){
    // }
    addAge(){
        // developer.age++;
        this.age++;
    },
    getMatied(){
         this.isMatied = true;
    },
    getDivorced(){
        this.isMatied = false;
    }
};

developer.hasOwnProperty('name') // Есть ли это свойство в масиве