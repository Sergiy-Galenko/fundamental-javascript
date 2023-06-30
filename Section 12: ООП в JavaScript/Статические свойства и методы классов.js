class Player {
  static totalPlayers = 0;

  constructor(login, score = 100) {
    this.login = login;
    this.score = score;
    Player.totalPlayers++;
  }
  increaseScore(num = 10) {
    this.score += num;
  }

  decreaseScore(num = 10) {
    this.score -= num;
  }

  static create(login) {
    return new Player(login, 250);
  }

  static sortByScore(a, b) {
    return a.score - b.score;
  }
}

class PaidPlayer extends Player {
  static totalPlayers = 0;
  constructor(login, score = 100, accBalance = 100) {
    super(login, score);
    this.accBalance = accBalance;
    PaidPlayer.totalPlayers++;
  }

  increaseBalance(amount) {
    this.accBalance += amount;
  }
}

const p1 = new PaidPlayer("stark", 200, 10000);
p1.hasOwnProperty("login"); // true
p1.hasOwnProperty("increaseBalance"); // false

for (const prop in p1) {
  if (p1.hasOwnProperty(prop)) {
    console.log(p1[prop]);
  }
}

const p10 = new Player("tom");
console.log(Player.totalPlayers);
