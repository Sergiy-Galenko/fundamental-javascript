class Player {
  static totalPlayers = 0;
  #score;

  constructor(login, lastName, firstName, score = 100) {
    this.login = login;
    this._score = score;
    this.lastName = lastName;
    this.firstName = firstName;
    Player.totalPlayers++;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [f, l] = name.split(" ");
    this.firstName = f;
    this.lastName = l;
  }

  get score() {
    return this._score;
  }
  #getScore(){
    return this.#score;
  } 

  set score(num) {
    this.increaseScore(num);
  }
  increaseScore(num = 10) {
    this._score += num;
  }

  decreaseScore(num = 10) {
    this._score -= num;
  }

  static create(login) {
    return new Player(login, 250);
  }

  static sortByScore(a, b) {
    return a._score - b._score;
  }
}

const p1 = new Player("thor");
