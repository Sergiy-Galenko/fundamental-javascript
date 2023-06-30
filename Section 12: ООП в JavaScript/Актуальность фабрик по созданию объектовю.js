//DRY  don`t repeat yourself

const player1 = {
    login: 'master',
    score: 100,
    increaseScore(num = 10){
        this.score += num;
    },
    decreaseScore(num = 10){
        this.score -= num;
    }
}

const player2 ={
    login: 'master',
    score: 150,
    increaseScore(num = 10){
        this.score += num;
    },
    decreaseScore(num = 10){
        this.score -= num;
    }
}