export default class extends Phaser.Plugins.ScenePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);
    this.scene = scene;
  }

  boot() {
    // let eventEmitter = this.systems.events;
    // eventEmitter.on('update', this.update, this);
  }

  start() {
  }

  preUpdate(time, delta) {
  }

  update(time, delta) {
  }

  postUpdate(time, delta) {
  }

  pause() {
  }

  resume() {
  }

  sleep() {
  }

  wake() {
  }

  shutdown() {
  }

  destroy() {
    this.shutdown();
    this.scene = undefined;
  }
}
