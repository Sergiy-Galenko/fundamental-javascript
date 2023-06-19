//https://cdnjs.cloudflare.com/ajax/libs/moveTo/1.8.2/moveTo.min.js
// yarn add moveto

new moveto = new MoveTo();

const button = document.querySelector('button');

button.forEach(btn => moveTo.registerTrigger(btn));


const link = document.querySelector('a');
link.addEventListener('click',registerTrigger);

function registerTrigger(event){
    event.preventDefault();
    const target =  document.querySelector(this.getAttribute('href'));
    moveto.move(target);
}