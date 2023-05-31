var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(str) {

        if(this.tries < 1){
            console.log('Игра окончена ');
            return alert('Игра окончена');
        }

        if(str.toLowerCase().includes(this.correctAnswer.toLowerCase())){
            alert('Правельный ответ!!!');
            console.log('Правельный ответ!!!');
            this.tries = 0;
        }else{
            alert('Неправельный ответ!!!');
            console.log('Неправельный ответ!!!');
            this.tries--;

            const hint = this.hints[this.tries === 2 ? 0 : 1];
            if (this.tries){
                alert('Подсказка: ' + hint)
            }
        }
    },
}


window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
    }
}