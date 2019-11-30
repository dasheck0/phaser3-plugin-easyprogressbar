export default class EasyProgressbar extends Phaser.GameObjects.Graphics {
  constructor(scene, x, y, width, height, options = {}) {
    super(scene);

    this.setPosition(x, y);
    this.width = width;
    this.height = height;

    this.progress = options.progress;

    this.orientation = options.orientation;
    this.reverse = options.reverse;

    this.radius = options.radius;

    this.backgroundColor = options.backgroundColor;
    this.backgroundAlpha = options.backgroundAlpha;

    this.color = options.color;
    this.flat = options.flat;

    this.indicatorsEnabled = options.indicators.enabled;
    this.indicatorsColor = options.indicators.color;
    this.indicatorsAlpha = options.indicators.alpha;
    this.indicatorsSize = options.indicators.size;
    this.indicatorsDistance = options.indicators.distance;

    this.shadeColor = this._getShadeColor();
    this.tintColor = this._getTintColor();

    this.padding = options.padding;

    scene.add.existing(this);

    this.drawProgressbar();
  }

  drawProgressbar() {
    this.clear();

    this.fillStyle(this.backgroundColor, this.backgroundAlpha);
    this.fillRoundedRect(this.x, this.y, this.width, this.height, this.radius);

    if (this.progress > 0) {
      if (this.flat) {
        this.fillStyle(this.color, 1);

        const rect = this._getForeGroundRectangleFromOrientation();
        this.fillRoundedRect(rect.x, rect.y, rect.width, rect.height, this._getForegroundRadiiFromOrientation());
      } else {
        const radii = this._getForegroundRadiiFromOrientation();
        const vertical = this.orientation === 'vertical';
        const distanceInPercent = 0.1;
        const space = ((vertical ? this.width : this.height) - 2 * this.padding) * distanceInPercent;
        const rect = this._getForeGroundRectangleFromOrientation();

        /* middle */
        this.fillStyle(this.color, 1);
        this.fillRect(
          vertical ? rect.x + space : rect.x,
          vertical ? rect.y : rect.y + space,
          vertical ? rect.width - 2 * space : rect.width,
          vertical ? rect.height : rect.height - 2 * space
        );

        /* top */
        this.fillStyle(this.tintColor, 1);
        this.fillRoundedRect(
          vertical ? rect.x : rect.x,
          vertical ? rect.y : rect.y,
          vertical ? space : rect.width,
          vertical ? rect.height : space,
          {
            br: 0,
            bl: vertical ? radii.bl : 0,
            tr: vertical ? 0 : radii.tr,
            tl: radii.tl
          }
        );

        /* bottom */
        this.fillStyle(this.shadeColor, 1);
        this.fillRoundedRect(
          vertical ? rect.x + rect.width - space : rect.x,
          vertical ? rect.y : rect.y + rect.height - space,
          vertical ? space : rect.width,
          vertical ? rect.height : space,
          {
            tr: vertical ? radii.tr : 0,
            tl: 0,
            br: radii.br,
            bl: vertical ? 0 : radii.bl
          }
        );
      }

      if (this.indicatorsEnabled) {
        const vertical = this.orientation === 'vertical';
        const step = this.indicatorsDistance;
        const stepSize = (vertical ? this.height * step : this.width * step);

        this.fillStyle(this.indicatorsColor, this.indicatorsAlpha);
        const rect = this._getForeGroundRectangleFromOrientation();

        for (let i = 0; i < (vertical ? rect.height / stepSize : rect.width / stepSize); i += 1) {
          this.fillRect(
            vertical ? rect.x : rect.x + i * stepSize,
            vertical ? rect.y + i * stepSize : rect.y,
            vertical ? rect.width : this.indicatorsSize,
            vertical ? this.indicatorsSize : rect.height
          )
        }
      }
    }
  }

  setProgress(progress) {
    this.progress = Math.max(Math.min(progress, 1), 0);
    this.drawProgressbar();
  }

  _getForeGroundRectangleFromOrientation() {
    if (this.orientation === 'vertical') {
      return {
        x: this.x + this.padding,
        y: this.y + this.padding + (this.reverse ? (1 - this.progress) * (this.height - 2 * this.padding) : 0),
        width: this.width - 2 * this.padding,
        height: (this.height - 2 * this.padding) * this.progress
      };
    }

    return {
      x: this.x + this.padding + (this.reverse ? (1 - this.progress) * (this.width - 2 * this.padding) : 0),
      y: this.y + this.padding,
      width: (this.width - 2 * this.padding) * this.progress,
      height: this.height - 2 * this.padding
    };
  }

  _getForegroundRadiiFromOrientation() {
    if (this.orientation === 'vertical') {
      return {
        tl: this.reverse ? ((this.progress < 1) ? 0 : this.radius) : this.radius,
        tr: this.reverse ? ((this.progress < 1) ? 0 : this.radius) : this.radius,
        bl: this.reverse ? this.radius : ((this.progress < 1) ? 0 : this.radius),
        br: this.reverse ? this.radius : ((this.progress < 1) ? 0 : this.radius)
      };
    }

    return {
      tl: this.reverse ? ((this.progress < 1) ? 0 : this.radius) : this.radius,
      bl: this.reverse ? ((this.progress < 1) ? 0 : this.radius) : this.radius,
      br: this.reverse ? this.radius : ((this.progress < 1) ? 0 : this.radius),
      tr: this.reverse ? this.radius : ((this.progress < 1) ? 0 : this.radius)
    };
  }

  _getShadeColor() {
    const color = Phaser.Display.Color.ValueToColor(this.color);
    color.darken(10);
    return Phaser.Display.Color.GetColor(color.red, color.green, color.blue);
  }

  _getTintColor() {
    const color = Phaser.Display.Color.ValueToColor(this.color);
    color.lighten(25);
    return Phaser.Display.Color.GetColor(color.red, color.green, color.blue);
  }
}
