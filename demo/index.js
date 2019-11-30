import 'phaser';

import MainScene from "./mainScene";

const game = new Phaser.Game({
  width: 1024,
  height: 768,
  scene: [MainScene],
  backgroundColor: 0x00ff00,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  autoRound: false,
  'render.transparent': true,
});

game.scene.start('main');

