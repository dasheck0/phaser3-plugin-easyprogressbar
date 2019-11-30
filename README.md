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
```
import EasyProgressbarPlugin from EasyProgressbarPlugin';

const game = new Phaser.Game({
  width: 1024,
  height: 768,
  scene: [MainScene],
  backgroundColor: 0x00ff00,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  plugins: {
    global: [{
      key: 'EasyProgressbarPlugin',
      plugin: EasyProgressbarPlugin,
      start: true
    }]
  }
});


```

## API
<!-- section: API -->
<!-- Describe the API of your module / library such that other developers know how to interact with it. -->

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
