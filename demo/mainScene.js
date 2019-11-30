import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {
  }

  create() {
    this.cameras.main.setBackgroundColor(0xff0000);

    const config = {
      color: 0xf4b544,
      radius: 4,
      padding: 4
    };

    this.add.easyProgressbar(100, 100, 200, 48, config);
    this.add.easyProgressbar(100, 125, 200, 48, Object.assign(config, { progress: 0.5 }));
  }

  update(time, delta) {
  }
}
