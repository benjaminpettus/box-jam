
(function (){

//private static variable
  var ANIMATIONS = {
    IDLE: {
      name: 'idle',
      frames: [0,1,2,3],
      fps: 5
    }
  };

var FACING_FACTOR = {
  LEFT: -1,
  RIGHT: 1
};

function select_sprite_row(player_id) {
  return function(frame_id){
    return frame_id + player_id*boxJam.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
  };
};

// sprite class constructor

boxJam.Player = function (game, id, name) {
  this.game = game;
  this.id = id;
  this.name = name? name: 'player ' +(id +1);
  this.facing; // direction that player is facing, state updates this

  //super constructor call
  Phaser.Sprite.call(this, game, 0, 0, boxJam.ASSETS.SPRITESHEET.PLAYER.name);

  // set center registration poing
  this.anchor = {x: 0.5, y: 0.5};

  //set animations
  // if(this.id == 0){
  // this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames);
  // } else{
  //   var frames = ANIMATIONS.IDLE.frames;
  //   for(var i= 0; len = frames.length; i< len; i++){
  //     frames[i] = frames[i] + boxJam.ASSETS.SPRITESHEET.PLAYER.frames_per_row;  
  // }
  // this.animations.add(ANIMATIONS.IDLE.name, frames);

  this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

  //play the initial animation
  this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
};

//extend Sprite prototype
boxJam.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor: {
    value: boxJam.Player
  }
});

//public static variable
boxJam.Player.FACING = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

// is invoked on every frame
boxJam.Player.prototype.update = function() {
  //update facing
  this.scale.x = FACING_FACTOR[ this.facing ];

};

})();