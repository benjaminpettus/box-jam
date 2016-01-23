//create a single global class variable

window.boxJam = {
  ASSETS: {},

  STAGE: {
    WIDTH: 900,
    HEIGHT: 600
  },

  STAGE_ID: 'game', //the div in index.html to render this game

  STATES: {
    BOOT: 'Boot',
    GAME: 'Game'
  }

};
//load phaser on window load
window.onload = function () {
  boxJam.game = new Phaser.Game(boxJam.STAGE.WIDTH, boxJam.STAGE.HEIGHT, Phaser.AUTO, boxJam.STAGE_ID);
  boxJam.game.state.add(boxJam.STATES.BOOT, boxJam.Boot );
  boxJam.game.state.add(boxJam.STATES.GAME, boxJam.Game );
  boxJam.game.state.start(boxJam.STATES.BOOT );
  
};