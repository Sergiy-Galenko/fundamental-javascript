// THIS

const developer = {
    name: 'Sergiy',
    salary: 2500,

    getBonus(sum){
        console.log(`${this.name} has a salary this month ${this.salary + sum}`);
    }
}
developer.getBonus(250)

const menedger ={
    name: 'Nasty',
    salary: 1800, 
}

// developer.getBonus.call(menedger, 150);
// developer.getBonus.apply(menedger, [150]);
// developer.getBonus.bind(menedger, 150)();

// menedger.getBonus = developer.getBonus.bind(menedger);
// menedger.getBonus(150);


// {
//     prototype:{
//         call: fn,
//         apply: fn,
//         bind: fn,
//     }
// }