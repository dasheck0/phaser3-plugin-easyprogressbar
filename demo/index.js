import 'phaser';

import EasyProgressbarPlugin from '../src/index';
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
  plugins: {
    global: [{
      key: 'EasyProgressbarPlugin',
      plugin: EasyProgressbarPlugin,
      start: true
    }]
  }
});

game.scene.start('main');
