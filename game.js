var helpers = require('./helpers.js');
var prompt = require('prompt');

var Game = function () {
  this.moves = ['', '', '', '', '', '', '', '', ''];
  this.board = `
   ${moves[0]} | ${moves[1]} | ${moves[2]}
  ---------
   ${moves[3]} | ${moves[4]} | ${moves[5]}
  ---------
   ${moves[6]} | ${moves[7]} | ${moves[8]} `

  this.turn = 0;
};

Game.prototype.whoseTurn = function () {
  return this.turn % 2 === 0 ? 'X' : 'O';
};

Game.prototype.isTaken = function (index) {
  return this.moves[index] ? true : false;
};

Game.prototype.move = function (position) {
  var turn = this.whoseTurn();

  var index = position - 1;
  if (this.isTaken[index]) {
    return this.getMove()
  } else {
    this.moves[index] = turn;
    this.turn++;

    if (this.isOver) {
      console.log(this.board);
      console.log('The game is over!');
      return;
    } else {
      console.log(this.board);
      return this.getMove();
    }
  }
};

Game.prototype.getMove = function () {
  prompt.get('Move: ', function (err, res) {
    this.move(res);
  });
};

Game.prototype.horizontalWin = function () {
  if ((this.moves[0] && this.moves[1] && this.moves[2]) ||
      (this.moves[3] && this.moves[4] && this.moves[5]) ||
      (this.moves[6] && this.moves[7] && this.moves[8])) {
        return true;
  } else {
    return false;
  };
};

Game.prototype.verticalWin = function () {
  if ((this.moves[0] && this.moves[3] && this.moves[6]) ||
      (this.moves[1] && this.moves[4] && this.moves[7]) ||
      (this.moves[2] && this.moves[5] && this.moves[8])) {
        return true;
  } else {
    return false;
  };
};

Game.prototype.diagonalWin = function () {
  if ((this.moves[0] && this.moves[4] && this.moves[8]) ||
      (this.moves[2] && this.moves[4] && this.moves[6])) {
        return true;
  } else {
    return false;
  };
};

Game.prototype.isOver = function () {
  if (this.horizontalWin() ||
      this.verticalWin() ||
      this.diagonalWin() ||
      this.board.indexOf('') < 0) {
    return true;
  } else {
    return false;
  };
};

Game.prototype.init = function () {

}


module.exports = Game;
