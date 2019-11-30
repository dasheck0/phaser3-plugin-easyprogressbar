export default class EasyProgressbar extends Phaser.GameObjects.Graphics {
  constructor(scene, x, y, width, height, options = {}) {
    super(scene);

    console.log("nfdj,", x, y, width, height, options);

    this.setPosition(x, y);
    this.width = width;
    this.height = height;

    this.progress = options.progress;

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
    this.fillRoundedRect(this.x + this.padding, this.y + this.padding, (this.width - 2 * this.padding) * this.progress, this.height - 2 * this.padding, {
      tl: this.radius,
      bl: this.radius,
      tr: (this.progress < 1) ? 0 : this.radius,
      br: (this.progress < 1) ? 0 : this.radius,
    });
  }

  setProgress(progress) {
    this.progress = Math.max(Math.min(progress, 1), 0);
    this.drawProgressbar();
  }
}
