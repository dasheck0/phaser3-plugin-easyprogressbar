export default class EasyProgressbar extends Phaser.GameObjects.Graphics {
  constructor(scene, x, y, width, height, options = {}) {
    super(scene);

    console.log("nfdj,", x, y, width, height, options);

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

    this.padding = options.padding;

    scene.add.existing(this);

    this.drawProgressbar();
  }

  drawProgressbar() {
    this.clear();

    this.fillStyle(this.backgroundColor, this.backgroundAlpha);
    this.fillRoundedRect(this.x, this.y, this.width, this.height, this.radius);

    this.fillStyle(this.color, 1);

    const rect = this._getForeGroundRectangleFromOrientation();
    this.fillRoundedRect(rect.x, rect.y, rect.width, rect.height, this._getForegroundRadiiFromOrientation());
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
}
