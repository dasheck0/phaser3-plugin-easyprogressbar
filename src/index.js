import Creator from './Creator';

export default class EasyProgressbarPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);
    pluginManager.registerGameObject('easyProgressbar', Creator);
  }
}
