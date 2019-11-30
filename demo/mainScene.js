import Phaser from 'phaser';
import Plugin from "../src/index";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {
   // this.load.scenePlugin('plugin', Plugin);
  }

  create() {
    this.cameras.main.setBackgroundColor(0xff0000);
  }

  update(time, delta) {
  }
}
