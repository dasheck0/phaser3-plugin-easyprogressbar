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

    this.textShow = options.text.enabled;
    this.textFormat = options.text.format;
    this.textStyle = options.text.style;
    this.textOriginX = options.text.origin.x;
    this.textOriginY = options.text.origin.y;
    this.textAlignX = options.text.align.x;
    this.textAlignY = options.text.align.y;

    this.shadeColor = this._getShadeColor();
    this.tintColor = this._getTintColor();

    this.padding = options.padding;

    scene.add.existing(this);

    this._drawProgressbar();

    if (this.textShow) {
      this.text = this.scene.add.text(this.x, this.y, this.textFormat(this.progress), this.textStyle);
      this.text.setOrigin(this.textOriginX, this.textOriginY);

      this.setTextAlign({ x: this.textAlignX, y: this.textAlignY });
    }
  }

  setPosition(x, y) {
    super.setPosition(x, y);

    if (this.text) {
      this.text.setPosition(x, y);
      this.setTextAlign({ x: this.textAlignX, y: this.textAlignY });
    }
  }

  setProgress(progress, animate = false) {

    if (!animate) {
      this.progress = Math.max(Math.min(progress, 1), 0);
      this._drawProgressbar();
    } else {
      const tween = this.scene.tweens.add({
        targets: this,
        progress: { from: this.progress, to: EasyProgressbar._limitProgress(progress) },
        onUpdate: function () {
          this._drawProgressbar();
        },
        onUpdateScope: this,
        onComplete: function () {
          tween.remove();
        },
        ease: 'Cubic.Out',
        duration: 300,
        repeat: 0,
        yoyo: false
      });
    }
  }

  setText(text) {
    if (this.text) {
      this.text.text = text;
    }
  }

  setTextAlign(align) {
    if (this.text && align) {
      const allowedAligns = [
        { name: 'start', value: 0 },
        { name: 'center', value: 0.5 },
        { name: 'end', value: 1 }
      ];

      const x = allowedAligns.find(entry => entry.name === align.x);
      if (x) {
        this.text.x = this.width * x.value + this.x;
      }

      const y = allowedAligns.find(entry => entry.name === align.y);
      if (y) {
        this.text.y = this.height * y.value + this.y;
      }
    }
  }

  _drawProgressbar() {
    this.clear();

    this.fillStyle(this.backgroundColor, this.backgroundAlpha);
    this.fillRoundedRect(0, 0, this.width, this.height, this.radius);

    this._updateProgressText();

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

        console.log("space", space, this.radius, rect.height)

        /* middle */
        this.fillStyle(this.color, 1);
        this.fillRect(
          vertical ? rect.x + Math.max(this.radius, space) : rect.x,
          vertical ? rect.y : rect.y + Math.max(this.radius, space),
          vertical ? rect.width - 2 * Math.max(space, this.radius) : rect.width,
          vertical ? rect.height : rect.height - 2 * Math.max(space, this.radius)
        );

        /* top */
        this.fillStyle(this.tintColor, 1);
        this.fillRoundedRect(
          vertical ? rect.x : rect.x,
          vertical ? rect.y : rect.y,
          vertical ? Math.max(space, this.radius) : rect.width,
          vertical ? rect.height : Math.max(space, this.radius),
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
          vertical ? rect.x + rect.width - Math.max(space, this.radius) : rect.x,
          vertical ? rect.y : rect.y + rect.height - Math.max(space, this.radius),
          vertical ? Math.max(space, this.radius) : rect.width,
          vertical ? rect.height : Math.max(space, this.radius),
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

        for (let i = 1; i < (vertical ? rect.height / stepSize : rect.width / stepSize); i += 1) {
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

  _updateProgressText() {
    if (this.text) {
      this.text.text = this.textFormat(this.progress);
    }
  }

  _getForeGroundRectangleFromOrientation() {
    if (this.orientation === 'vertical') {
      return {
        x: 0 + this.padding,
        y: 0 + this.padding + (this.reverse ? (1 - this.progress) * (this.height - 2 * this.padding) : 0),
        width: this.width - 2 * this.padding,
        height: (this.height - 2 * this.padding) * this.progress
      };
    }

    return {
      x: 0 + this.padding + (this.reverse ? (1 - this.progress) * (this.width - 2 * this.padding) : 0),
      y: 0 + this.padding,
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

  static _limitProgress(progress) {
    return Math.max(Math.min(progress, 1), 0);
  }
}
