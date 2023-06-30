class Player{
    constructor(login,score = 100){
        this.login = login; 
        this.score = score; 
    }
    increaseScore(num = 10){
        this.score += num;
    }
    
    decreaseScore(num = 10){
        this.score -= num;
    }

}

class PaidPlayer extends Player {
    constructor(login,score = 100, accBalance  = 100){
        super(login,score);
        this.accBalance = accBalance;
    }

    increaseBalance(amount){
        this.accBalance += amount;
    }
}

class  SupperPaidPlayer extends PaidPlayer{

}

const player3 = new Player('tor');
const player4 = new Player('loki',200);
const pp1 = new PaidPlayer('stark',200,10000)