import Creator from './Creator';

console.log("fdhjkk");

export default class EasyProgressbarPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);

    console.log("doooing somethign");

    pluginManager.registerGameObject('easyProgressbar', Creator);
  }
}
