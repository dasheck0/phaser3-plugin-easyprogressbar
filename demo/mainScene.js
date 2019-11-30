import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {
  }

  create() {
    this.cameras.main.setBackgroundColor(0xff0000);
  }

  update(time, delta) {

  }
}
