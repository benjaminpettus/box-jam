//the Game state
//handles sprite creation and game logic
(function (){

  var INITIAL_POSTITONS =[
  //player 1
  {x: 100, y: 100},
  //player 2
  {x:600, y: 100}
  ];
//class constructor
boxJam.Game = function(){
  this.player_1;
  this.player_2;
};

boxJam.Game.prototype.create = function(){
  this.player_1 = new boxJam.Player(this.game, 0);
  this.player_2 = new boxJam.Player(this.game, 1);
  this.game.add.existing(this.player_1);
  this.game.add.existing(this.player_2);

  //position players
  this.player_1.x= INITIAL_POSTITONS[0].x;
  this.player_1.y= INITIAL_POSTITONS[0].y;
  this.player_2.x= INITIAL_POSTITONS[1].x;
  this.player_2.y= INITIAL_POSTITONS[1].y;
};

boxJam.Game.prototype.update = function(){

};

boxJam.Game.prototype.shutdown = function() {
  // body...
};

})();