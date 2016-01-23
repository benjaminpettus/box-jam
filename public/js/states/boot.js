
//preloading assets
//and switching to the game state


//creating class constructor
boxJam.Boot = function(){

};

boxJam.Boot.prototype.preload = function(){
//will preload all assets
 
  //autoload each assest by type
 Object.keys(boxJam.ASSETS).forEach(function(type){
    for( var asset in boxJam.ASSETS[type] ){
      boxJam.game.load[ type.toLowerCase() ](
        boxJam.ASSETS[type][ asset ].name,
        boxJam.ASSETS[type][ asset ].path,
        boxJam.ASSETS[type][ asset ].width,
        boxJam.ASSETS[type][ asset ].height,
        boxJam.ASSETS[type][ asset ].frames
      );
    }
  });
};


boxJam.Boot.prototype.create = function() {
  //switch to game state
  this.state.start(boxJam.STATES.GAME);
};