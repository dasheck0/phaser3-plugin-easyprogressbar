# phaser3-plugin-easyprogressbar
This is a phaser 3 plugin for creating easy to use and beautiful progressbars. Easy progressbars support:

* Horizontal and vertical layout
* Forward and backward progress
* Flat and shiny design
* Rounded progressbars
* Customizable progress text
* Adding and styling indicators
* Animating progress 

![](https://github.com/dasheck0/phaser3-plugin-easyprogressbar/blob/develop/art/demo.png)

## Usage
```javascript
import 'phaser';
import EasyProgressbarPlugin from 'phaser3-plugin-easyprogressbar';

const game = new Phaser.Game({
  width: 1024,
  height: 768,
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    create: create,
  },
  plugins: {
    global: [{
      key: 'EasyProgressbarPlugin',
      plugin: EasyProgressbarPlugin,
      start: true
    }]
  }
});

function create() {
  this.add.easyProgressbar(100, 100, 200, 48, {
    color: 0xf7cf57,
    padding: 3,
    radius: 3,
    progress: 1,
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
}
```

## API
```javascript
// initialize plugin ...
// this.add.easyProgressbar(x, y, width, height, options)
const progressBar = this.add.easyProgressbar(0, 0, 100, 50, {});
```

Options can be as follows: 

| Name | Explanation | Example | Default |
|:-|:-|:-|:-|
| progress | The initial progress of the progress bar. Must be float between `0` and `1` | `0.5` | `1` |
| orientation | Orientation of the progressbar. Can either be `horizontal` or `vertical` | `horizontal` | `horizontal`|
| reverse | Boolean that indicates whether the progressbar operates forward or backwards. Also depends on the `orientation`. Forward direction for `horizonal` is from left to right. Forward direction for `vertical` is from top to bottom. If set to `true` it reverts the direction (right to left and bottom to top). | `true` | `false` |
| radius| The radius of the progress bar corners. Maximum value is half of the width and height respectively based on `orientation`| `5` | `0` |
| backgroundColor | The background color of the progress bar | `0xffffff` | `0x000000` |
| backgroundAlpha | The background alpha of the progress bar | `0.5` | `0.5` |
| color | The foreground color of the progressbar | `0xff0000` | `0xffffff` |
| flat | Boolean that indicates, whether the progressbar has some color highlights (`false`) or not (`true`) | `false` | `false` |
| indicators.enabled | Boolean that indicates whether indicators are drawn or not. | `true`| `false`|
| indicators.color| The color of the indicators. | `0xffffff`| `0x000000`|
| indicators.alpha| The alpha of the indicators| `0.5`| `0.1`|
| indicators.size| The width or height of the indicators depending on `orientation` | `5`| `2` |
| indicators.distance| The distance between indicators in percent of width or height of progressbar depending on `orientation`| `0.1`| `0.1`|
| text.enabled| Boolean that indicates whether progress text should be drawn| `true`| `false`|
| text.style| Phaser 3 compatible text style | `{}` | `false`|
| text.format| Function that takes progress as first parameter and should return a string | `progress => (progress * 100).toFixed(0)`| `progress => progress`|
| text.origin.x| The x origin of the text| `0.5`| `0.5`|
| text.origin.y| The y origin of the text| `0.5`| `0.5`|
| text.align.x| The horizontal alignment of the text within the progressbar. Must be either `start`, `center` or `end`| `end`| `center`|
| text.align.y| The vertical alignment of the text within the progressbar. Must be either `start`, `center` or `end`| `end`| `center`|
| text.padding| The padding of the foreground progressbar to its background| `2`| `5`|

```javascript
const progressBar = this.add.easyProgressbar(0, 0, 100, 50, options);

// without animation
progressBar.setProgress(0.2);

// with animation
progressBar.setProgress(0.8, true);
```
## Installation
```
npm i phaser3-plugin-easyprogressbar
```

Alternatively you can grab the latest distributed version directly from github via: [https://raw.githubusercontent.com/dasheck0/phaser3-plugin-easyprogressbar/master/dist/EasyProgressbarPlugin.js](https://raw.githubusercontent.com/dasheck0/phaser3-plugin-easyprogressbar/master/dist/EasyProgressbarPlugin.js)

## Contributing
Bug reports and pull requests are welcome on GitHub at [https://github.com/dasheck0/phaser3-plugin-easyprogressbar/pulls](https://github.com/dasheck0/phaser3-plugin-easyprogressbar/pulls). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
``` 
MIT License

Copyright (c) 2019 Stefan Neidig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
