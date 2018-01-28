
// define team object & methods
const team = {
  _players: [],
  _games: [],

  get players() {
    return this._players;
  },
/*	set players(item)  {
    this._players = item;
  }, */
  get games() {
    return this._games;
  },
/*  set games(item) {
    this._games = item;
  }, */

  // add players
  addPlayer(fname, lname, age) {
    const player = {
      firstName: fname,
      lastName: lname,
      age: age
    }
    this._players.push(player);
  },

  // add games
  addGames(oppo, tp, op) {
    const game = {
      opponent: oppo,
      teamPoints: tp,
      opponentPoints: op
    }
    this._games.push(game);
  }
}

team.addPlayer('Pablo', 'Sanchez', 11);
team.addPlayer('Joe', 'Bowers', 10);
team.addPlayer('Ric', 'Sosesy', 11);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGames('Broncos', 42, 27);
team.addGames('Rhinos', 12, 44);
team.addGames('Cherries', 62, 13);
console.log(team.games);