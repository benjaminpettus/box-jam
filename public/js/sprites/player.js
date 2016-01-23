// sprite class constructor

boxJam.Player = function (game, id, name) {
  this.game = game;
  this.id = id;
  this.name = name? name: 'player ' +(id +1);

  //super constructor call
  Phaser.Sprite.call(this, game, 0, 0, boxJam.ASSETS.SPRITESHEET.PLAYER.name);
};

//extend Sprite prototype
boxJam.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor: {
    value: boxJam.Player
  }
});