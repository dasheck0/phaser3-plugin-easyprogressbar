(function webpackUniversalModuleDefinition(root, factory) {
	//Last build: Sun Jun 28 2020 20:04:19 GMT+0200 (GMT+02:00)
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//Last build: Sun Jun 28 2020 20:04:19 GMT+0200 (GMT+02:00)
	else if(typeof define === 'function' && define.amd)
		define("EasyProgressbarPlugin", [], factory);
	//Last build: Sun Jun 28 2020 20:04:19 GMT+0200 (GMT+02:00)
	else if(typeof exports === 'object')
		exports["EasyProgressbarPlugin"] = factory();
	//Last build: Sun Jun 28 2020 20:04:19 GMT+0200 (GMT+02:00)
	else
		root["EasyProgressbarPlugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/EasyProgressbar.js
class EasyProgressbar extends Phaser.GameObjects.Graphics {
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

  destroy() {
    super.destroy();

    if(this.text) {
      this.text.destroy();
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

// CONCATENATED MODULE: ./src/Creator.js


const GetValue = Phaser.Utils.Objects.GetValue;
const BuildGameObject = Phaser.GameObjects.BuildGameObject;

/* harmony default export */ var Creator = (function (x, y, width, height, options) {
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
});

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return src_EasyProgressbarPlugin; });


class src_EasyProgressbarPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager) {
    super(pluginManager);
    pluginManager.registerGameObject('easyProgressbar', Creator);
  }
}


/***/ })
/******/ ]);
});