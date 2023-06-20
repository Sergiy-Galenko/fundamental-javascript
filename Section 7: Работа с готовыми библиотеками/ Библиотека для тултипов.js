// yarn add tippy.js
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

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

tippy('[data-tipy-content]')