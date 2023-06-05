// reduce
const staff = [
    {
        id:1,
        name: 'Brad Pette',
        salary: 1000,
    },
    {
        id:2,
        name: 'Sergiy Halenko',
        salary: 900,
    },
    {
        id:3,
        name: 'Nazar Karl III',
        salary: 1100,
    },
    {
        id:4,
        name: 'Victor',
        salary: 1000,
    },
];

// const budget = staff.reduce((acc, user) => {
//     if (user.salary >= 1000){
//         return acc + user.salary;
//     }else{
//         return acc;
//     }
// }, 0);
const budget = staff.reduce((acc, user) => {
   return acc + user.salary;
}, 0);
console.log(budget);

const budgetForSmallPersonal = staff.reduce((acc,user) => {
    if (user.salary < 1000){
        return acc + user.salary;
    }else return acc;
},0) 
console.log(budgetForSmallPersonal);

const salaries = staff.reduce((acc,user) => {
    return [...acc, user.salary];
},[])
console.log(salaries);