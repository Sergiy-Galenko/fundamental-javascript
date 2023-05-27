// Loop break


let tries = 0
while(true){
    const age = prompt('Сколько вам лет ');

    if (age){
        alert('Welrom')
        break;
    }


    tries++;
    if (tries === 3){
        alert('Попытки закончились');
        break;
    }
    alert('Данные введены не коректно.');
}

alert('End')