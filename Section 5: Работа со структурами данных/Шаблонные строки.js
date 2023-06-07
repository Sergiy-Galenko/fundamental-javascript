// Tamplate string
const firstName = 'John';
const lastName = 'Doe';

console.log('Hi,  my names is '+firstName + ' ' + lastName+'!');
console.log(`Hi,  my names is ${firstName} ${lastName}!  my age ${2023 - 2004}`);

const html = `
        <div>
            <h1>${firstName} ${lastName}</h1>
            <button>Click me</button>
        </div>
`;
console.log(html)
