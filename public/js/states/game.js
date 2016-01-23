//the Game state
//handles sprite creation and game logic

//class constructor
boxJam.Game = function(){
  this.player_1;
};

boxJam.Game.prototype.create = function(){
  this.player_1 = new boxJam.Player(this.game, 0);
  this.game.add.existing(this.player_1);
};

boxJam.Game.prototype.update = function(){

};

boxJam.Game.prototype.shutdown = function() {
  // body...
};