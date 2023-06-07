// Destructuring
const developer = {
    id:1,
    fullName: 'Sergii Halenko',
    skills: ['HTML','CSS','JS','React'],
    area: 'front-end',
    languages:{
        english: 'B2',
        spanis: 'native',
        habrew: 'A1',
    },
};

let area,id;
({area,id} = developer);

// const area = 'abc'
// const {
//     area: areaDeveloper,
//     id,
//     languages:{
//         spanis
//     } = {},
//     skills:[,,basicScil] = [],
// } = developer;
// console.log(basicScil );

function fn([a,b,c],{x,y}){

}