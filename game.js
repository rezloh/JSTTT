var prompt = require('prompt');

var Game = function () {
  this.moves = ['', '', '', '', '', '', '', '', ''];
  this.turn = 0;
};

Game.prototype.printBoard = function () {
  return  `
     ${this.moves[0]} | ${this.moves[1]} | ${this.moves[2]}
    ---------
     ${this.moves[3]} | ${this.moves[4]} | ${this.moves[5]}
    ---------
     ${this.moves[6]} | ${this.moves[7]} | ${this.moves[8]} `;
}

Game.prototype.whoseTurn = function () {
  return this.turn % 2 === 0 ? 'X' : 'O';
};

Game.prototype.isTaken = function (index) {
  return this.moves[index] ? true : false;
};

Game.prototype.move = function (position) {
  var mark = this.whoseTurn();

  var index = position - 1;
  if (this.isTaken[index]) {
    return this.getMove()
  } else {
    this.moves[index] = mark;
    this.turn++;

    if (this.isOver()) {
      console.log(this.printBoard());
      console.log(`The game is over! ${mark} wins! Do you want to play again?`);
      return;
    } else {
      console.log(this.printBoard());
      return this.getMove();
    }
  }
};

Game.prototype.getMove = function () {
  var turn = this.whoseTurn();
  var context = this;

  prompt.get(`Move`, function (err, res) {
    context.move(res.Move);
  });
};

Game.prototype.horizontalWin = function () {
  if ((this.moves[0] && this.moves[0] === this.moves[1] && this.moves[1] === this.moves[2]) ||
      (this.moves[3] && this.moves[3] === this.moves[4] && this.moves[4] === this.moves[5]) ||
      (this.moves[6] && this.moves[6] === this.moves[7] && this.moves[7] === this.moves[8])) {
        return true;
  } else {
    return false;
  };
};

Game.prototype.verticalWin = function () {
  if ((this.moves[0] && this.moves[0] === this.moves[3] && this.moves[3] === this.moves[6]) ||
      (this.moves[1] && this.moves[1] === this.moves[4] && this.moves[4] === this.moves[7]) ||
      (this.moves[2] && this.moves[2] === this.moves[5] && this.moves[5] === this.moves[8])) {
        return true;
  } else {
    return false;
  };
};

Game.prototype.diagonalWin = function () {
  if ((this.moves[0] && this.moves[0] === this.moves[4] && this.moves[4] === this.moves[8]) ||
      (this.moves[2] && this.moves[2] === this.moves[4] && this.moves[4] === this.moves[6])) {
        return true;
  } else {
    return false;
  };
};

Game.prototype.isOver = function () {
  if (this.horizontalWin() ||
      this.verticalWin() ||
      this.diagonalWin() ||
      this.turn === 9) {
    return true;
  } else {
    return false;
  };
};

Game.prototype.init = function () {
  var game = new Game();
  console.log(game.printBoard());
  console.log('X goes first!')
  game.getMove();
}

module.exports = Game;
