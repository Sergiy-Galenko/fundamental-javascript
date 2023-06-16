const btn = document.querySelector('button');
const inputs = document.querySelector('input');
const fotm  = document.querySelector('form');

inputs.forEach(input => input.addEventListener('kaypress', handleEvent));
form.addEventListener('submit', handelSubmit);

  
function handleEvent(event){
    console.log(event);
    console.log(event.target);

    if (event.key === 'Enter'){
        event.preventDefault();
        event.target.nextElementSibling.focus();
    }
}

function handelSubmit(event){
    event.preventDefault();
    console.log('submit');
    validate()

    if (validate()){
        // submit AJAX
        form.reset();
    }else{
        alert('Fix emprty filds')
    }
}

function validate(){
    let isValid = true;

    inputs.forEach(
        input =>{
            if (!input.value.trim()){
                input.style.borderColor = 'red';
                isValid = false;
            }else{
                input.style.borderColor = 'currentColor'
            }
        }
    );

    return isValid;
}