
//preloading assets
//and switching to the game state


//creating class constructor
boxJam.Boot = function(){

};

boxJam.Boot.prototype.preload = function(){
//will preload all assets
};

boxJam.Boot.prototype.create = function() {
  //switch to game state
  this.state.start(boxJam.STATES.GAME);
};