import EasyProgressbar from './EasyProgressbar';

const GetValue = Phaser.Utils.Objects.GetValue;
const BuildGameObject = Phaser.GameObjects.BuildGameObject;

export default function (x, y, width, height, options) {
  const _x = x || 0;
  const _y = y || 0;
  const _width = width || 100;
  const _height = height || 100;

  const progress = Math.max(Math.min(GetValue(options, 'progress', 1), 1), 0);

  const orientation = GetValue(options, 'orientation', 'horizontal');
  const reverse = GetValue(options, 'reverse', false);

  const radius = Math.min(GetValue(options, 'radius', 0), orientation === 'horizontal' ? _height / 2 : _width / 2);

  const backgroundColor = GetValue(options, 'backgroundColor', 0x000000);
  const backgroundAlpha = GetValue(options, 'backgroundAlpha', 0.5);

  const color = GetValue(options, 'color', 0xffffff);
  const flat = GetValue(options, 'flat', false);
  const indicatorsEnabled = GetValue(options, 'indicators.enabled', false);
  const indicatorsColor = GetValue(options, 'indicators.color', 0x000000);
  const indicatorsAlpha = GetValue(options, 'indicators.alpha', 0.1);
  const indicatorsSize = GetValue(options, 'indicators.size', 2);
  const indicatorsDistance = GetValue(options, 'indicators.distance', 0.1);

  const showText = GetValue(options, 'text.enabled', false);
  const textStyle = GetValue(options, 'text.style', false);
  const textFormat = GetValue(options, 'text.format', progress => progress);
  const textOriginX = GetValue(options, 'text.origin.x', 0.5);
  const textOriginY = GetValue(options, 'text.origin.y', 0.5);
  const textAlignX = GetValue(options, 'text.align.x', 'center');
  const textAlignY = GetValue(options, 'text.align.y', 'center');

  const padding = GetValue(options, 'padding', 5);

  const gameObject = new EasyProgressbar(this.scene, _x, _y, _width, _height, {
    progress,
    orientation,
    reverse,
    radius,
    backgroundColor,
    backgroundAlpha,
    color,
    flat,
    indicators: {
      enabled: indicatorsEnabled,
      color: indicatorsColor,
      alpha: indicatorsAlpha,
      size: indicatorsSize,
      distance: indicatorsDistance
    },
    text: {
      enabled: showText,
      format: textFormat,
      style: textStyle,
      origin: {
        x: textOriginX,
        y: textOriginY
      },
      align: {
        x: textAlignX,
        y: textAlignY
      }
    },
    padding,
  });

  BuildGameObject(this.scene, gameObject, Object.assign(options, {
    x: _x,
    y: _y,
    add: true
  }));
  return gameObject;
}
