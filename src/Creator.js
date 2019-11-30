import EasyProgressbar from './EasyProgressbar';

const GetValue = Phaser.Utils.Objects.GetValue;
const BuildGameObject = Phaser.GameObjects.BuildGameObject;

export default function (x, y, width, height, options) {
  console.log("x,", x, y, width, height, options);

  const _x = x || 0;
  const _y = y || 0;
  const _width = width || 100;
  const _height = height || 100;

  const progress = GetValue(options, 'progress', 1);

  const radius = GetValue(options, 'radius', 0);

  const backgroundColor = GetValue(options, 'backgroundColor', 0x000000);
  const backgroundAlpha = GetValue(options, 'backgroundAlpha', 0.5);

  const color = GetValue(options, 'color', 0xffffff);

  const padding = GetValue(options, 'padding', 5);

  const gameObject = new EasyProgressbar(this.scene, _x, _y, _width, _height, {
    backgroundColor,
    backgroundAlpha,
    color,
    padding,
    progress,
    radius
  });

  BuildGameObject(this.scene, gameObject, {
    x: _x,
    y: _y,
    ...options,
    add: true
  });
  return gameObject;
}
