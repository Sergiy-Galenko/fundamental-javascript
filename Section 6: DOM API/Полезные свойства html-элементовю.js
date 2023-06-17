const block = document.querySelector('#block');

const block2 = block.querySelector('#too');
console.log(block2.getBoundingClientRect());


const x = 1;
// block2.insertAdjacentHTML('afterbegin',`
//     <h2 class = 'subtitle'>Text</h2>
//     <p>${x}</p>
// `);

block.closest('div');