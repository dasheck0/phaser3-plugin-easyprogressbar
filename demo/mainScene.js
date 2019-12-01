import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  preload() {
  }

  create() {
    this.cameras.main.setBackgroundColor(0x93baec);

    const colorfulProgressbar = this.add.easyProgressbar(100, 100, 400, 48, {
      color: 0x50a26a,
      backgroundColor: 0xf5c568,
      backgroundAlpha: 1,
      radius: 5,
      padding: 5,
      flat: false,
      progress: 0.8,
      text: {
        enabled: true,
        format: progress => `Loading...${(progress * 100).toFixed(0)}%`,
        style: {
          fontSize: '12px',
          stroke: '#3a7c49',
          strokeThickness: 4,
          shadow: {
            offsetX: 2,
            offsetY: 2,
            color: '#3a7c49',
            blur: 4,
            stroke: true,
            fill: true
          }
        }
      }
    });

    const stripedProgressbar = this.add.easyProgressbar(100, 200, 400, 48, {
      color: 0xed6c61,
      backgroundColor: 0xe3e3e3,
      padding: 4,
      progress: 0.6,
      radius: 20,
      flat: true,
      indicators: {
        enabled: true,
        size: 10,
        distance: 0.05,
        color: 0xbc2d22
      }
    });

    const experienceProgressbar = this.add.easyProgressbar(100, 300, 400, 48, {
      color: 0xf7cf57,
      padding: 3,
      radius: 3,
      progress: 0.42,
      text: {
        enabled: true,
        format: progress => `XP: ${(progress * 100).toFixed(0)}%`,
        origin: {
          x: 0.5,
          y: 0.5
        },
        align: {
          x: 'center',
          y: 'start'
        },
        style: {
          fontSize: '24px',
          stroke: '#000000',
          strokeThickness: 4,
          shadow: {
            offsetX: 2,
            offsetY: 2,
            color: '#000000',
            blur: 4,
            stroke: true,
            fill: true
          }

        }
      }
    });
    console.log("F>iU)§IUO");
    experienceProgressbar.destroy();
    console.log("948756784");

    const count = 7;
    for (let x = 100; x <= 500; x += 2 * 400 / (2 * count - 1)) {
      this.add.easyProgressbar(x, 400, 400 / (2 * count - 1), 100, {
        orientation: 'vertical',
        radius: 2,
        backgroundColor: 0x303030,
        reverse: true,
        color: new Phaser.Display.Color().random(100, 200).color,
        progress: Phaser.Math.Between(10, 90) / 100.0
      });
    }

    const stripedProgressbar2 = this.add.easyProgressbar(600, 100, 48, 500, {
      color: 0xe1dedf,
      padding: 2,
      progress: 0.25,
      radius: 100,
      orientation: 'vertical',
      indicators: {
        enabled: true
      },
      text: {
        enabled: true,
        align: {
          x: 'center',
          y: 'start'
        },
        origin: {
          x: 0.5,
          y: 1
        }
      }
    });

    const stripedProgressbar3 = this.add.easyProgressbar(700, 100, 48, 500, {
      color: 0xe1dedf,
      padding: 2,
      progress: 0.25,
      reverse: true,
      radius: 100,
      orientation: 'vertical',
      indicators: {
        enabled: true
      },
      text: {
        enabled: true,
        align: {
          x: 'center',
          y: 'end'
        },
        origin: {
          x: 0.5,
          y: 0
        }
      }
    });

    const healthProgressbar = this.add.easyProgressbar(100, 550, 175, 32, {
      color: 0xb72519,
      padding: 3,
      radius: 3,
      progress: 0.42,
      text: {
        enabled: true,
        format: progress => `${(progress * 1337).toFixed(0)}/1337`,
        origin: {
          x: -0.1,
          y: 0.5
        },
        align: {
          x: 'start',
          y: 'center'
        },
        style: {
          fontSize: '12px',
          stroke: '#000000',
          strokeThickness: 0,
          shadow: {
            offsetX: 2,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: true,
            fill: true
          }
        }
      }
    });

    const manaProgressbar = this.add.easyProgressbar(325, 550, 175, 32, {
      color: 0x2658be,
      padding: 3,
      radius: 3,
      progress: 0.42,
      text: {
        enabled: true,
        format: progress => `${(progress * 942).toFixed(0)}/942`,
        origin: {
          x: -0.1,
          y: 0.5
        },
        align: {
          x: 'start',
          y: 'center'
        },
        style: {
          fontSize: '12px',
          stroke: '#000000',
          strokeThickness: 0,
          shadow: {
            offsetX: 2,
            offsetY: 2,
            color: '#000000',
            blur: 0,
            stroke: true,
            fill: true
          }
        }
      }
    });

    this.time.addEvent({
      delay: 5000,
      callback: function() {
        healthProgressbar.setProgress(Phaser.Math.Between(10,90)/100, true);
        manaProgressbar.setProgress(Phaser.Math.Between(10,90)/100, true);
      },
      callbackScope: this,
      loop: true
    });
  }
}
