const btn = document.querySelector('button');
const inputs = document.querySelector('input');

inputs.forEach(input => input.addEventListener('kaypress', handleEvent));

//btn.addEventListener('click',handleEvent);


function handleEvent(event){
    console.log(event);
    console.log(event.target);

    if (event.key === 'Enter'){
        event.target.nextElementSibling.focus();
    }
}