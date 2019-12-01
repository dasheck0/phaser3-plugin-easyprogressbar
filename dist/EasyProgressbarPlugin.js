!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define("EasyProgressbarPlugin",[],i):"object"==typeof exports?exports.EasyProgressbarPlugin=i():t.EasyProgressbarPlugin=i()}(window,(function(){return function(t){var i={};function e(s){if(i[s])return i[s].exports;var r=i[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)e.d(s,r,function(i){return t[i]}.bind(null,r));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);class s extends Phaser.GameObjects.Graphics{constructor(t,i,e,s,r,o={}){super(t),this.setPosition(i,e),this.width=s,this.height=r,this.progress=o.progress,this.orientation=o.orientation,this.reverse=o.reverse,this.radius=o.radius,this.backgroundColor=o.backgroundColor,this.backgroundAlpha=o.backgroundAlpha,this.color=o.color,this.flat=o.flat,this.indicatorsEnabled=o.indicators.enabled,this.indicatorsColor=o.indicators.color,this.indicatorsAlpha=o.indicators.alpha,this.indicatorsSize=o.indicators.size,this.indicatorsDistance=o.indicators.distance,this.textShow=o.text.enabled,this.textFormat=o.text.format,this.textStyle=o.text.style,this.textOriginX=o.text.origin.x,this.textOriginY=o.text.origin.y,this.textAlignX=o.text.align.x,this.textAlignY=o.text.align.y,this.shadeColor=this._getShadeColor(),this.tintColor=this._getTintColor(),this.padding=o.padding,t.add.existing(this),this._drawProgressbar(),this.textShow&&(this.text=this.scene.add.text(this.x,this.y,this.textFormat(this.progress),this.textStyle),this.text.setOrigin(this.textOriginX,this.textOriginY),this.setTextAlign({x:this.textAlignX,y:this.textAlignY}))}destroy(){super.destroy(),this.text&&this.text.destroy()}setPosition(t,i){super.setPosition(t,i),this.text&&(this.text.setPosition(t,i),this.setTextAlign({x:this.textAlignX,y:this.textAlignY}))}setProgress(t,i=!1){if(i){const i=this.scene.tweens.add({targets:this,progress:{from:this.progress,to:s._limitProgress(t)},onUpdate:function(){this._drawProgressbar()},onUpdateScope:this,onComplete:function(){i.remove()},ease:"Cubic.Out",duration:300,repeat:0,yoyo:!1})}else this.progress=Math.max(Math.min(t,1),0),this._drawProgressbar()}setText(t){this.text&&(this.text.text=t)}setTextAlign(t){if(this.text&&t){const i=[{name:"start",value:0},{name:"center",value:.5},{name:"end",value:1}],e=i.find(i=>i.name===t.x);e&&(this.text.x=this.width*e.value+this.x);const s=i.find(i=>i.name===t.y);s&&(this.text.y=this.height*s.value+this.y)}}_drawProgressbar(){if(this.clear(),this.fillStyle(this.backgroundColor,this.backgroundAlpha),this.fillRoundedRect(0,0,this.width,this.height,this.radius),this._updateProgressText(),this.progress>0){if(this.flat){this.fillStyle(this.color,1);const t=this._getForeGroundRectangleFromOrientation();this.fillRoundedRect(t.x,t.y,t.width,t.height,this._getForegroundRadiiFromOrientation())}else{const t=this._getForegroundRadiiFromOrientation(),i="vertical"===this.orientation,e=.1,s=((i?this.width:this.height)-2*this.padding)*e,r=this._getForeGroundRectangleFromOrientation();this.fillStyle(this.color,1),this.fillRect(i?r.x+Math.max(this.radius,s):r.x,i?r.y:r.y+Math.max(this.radius,s),i?r.width-2*Math.max(s,this.radius):r.width,i?r.height:r.height-2*Math.max(s,this.radius)),this.fillStyle(this.tintColor,1),this.fillRoundedRect(r.x,r.y,i?Math.max(s,this.radius):r.width,i?r.height:Math.max(s,this.radius),{br:0,bl:i?t.bl:0,tr:i?0:t.tr,tl:t.tl}),this.fillStyle(this.shadeColor,1),this.fillRoundedRect(i?r.x+r.width-Math.max(s,this.radius):r.x,i?r.y:r.y+r.height-Math.max(s,this.radius),i?Math.max(s,this.radius):r.width,i?r.height:Math.max(s,this.radius),{tr:i?t.tr:0,tl:0,br:t.br,bl:i?0:t.bl})}if(this.indicatorsEnabled){const t="vertical"===this.orientation,i=this.indicatorsDistance,e=t?this.height*i:this.width*i;this.fillStyle(this.indicatorsColor,this.indicatorsAlpha);const s=this._getForeGroundRectangleFromOrientation();for(let i=1;i<(t?s.height/e:s.width/e);i+=1)this.fillRect(t?s.x:s.x+i*e,t?s.y+i*e:s.y,t?s.width:this.indicatorsSize,t?this.indicatorsSize:s.height)}}}_updateProgressText(){this.text&&(this.text.text=this.textFormat(this.progress))}_getForeGroundRectangleFromOrientation(){return"vertical"===this.orientation?{x:0+this.padding,y:0+this.padding+(this.reverse?(1-this.progress)*(this.height-2*this.padding):0),width:this.width-2*this.padding,height:(this.height-2*this.padding)*this.progress}:{x:0+this.padding+(this.reverse?(1-this.progress)*(this.width-2*this.padding):0),y:0+this.padding,width:(this.width-2*this.padding)*this.progress,height:this.height-2*this.padding}}_getForegroundRadiiFromOrientation(){return"vertical"===this.orientation?{tl:this.reverse&&this.progress<1?0:this.radius,tr:this.reverse&&this.progress<1?0:this.radius,bl:this.reverse?this.radius:this.progress<1?0:this.radius,br:this.reverse?this.radius:this.progress<1?0:this.radius}:{tl:this.reverse&&this.progress<1?0:this.radius,bl:this.reverse&&this.progress<1?0:this.radius,br:this.reverse?this.radius:this.progress<1?0:this.radius,tr:this.reverse?this.radius:this.progress<1?0:this.radius}}_getShadeColor(){const t=Phaser.Display.Color.ValueToColor(this.color);return t.darken(10),Phaser.Display.Color.GetColor(t.red,t.green,t.blue)}_getTintColor(){const t=Phaser.Display.Color.ValueToColor(this.color);return t.lighten(25),Phaser.Display.Color.GetColor(t.red,t.green,t.blue)}static _limitProgress(t){return Math.max(Math.min(t,1),0)}}const r=Phaser.Utils.Objects.GetValue,o=Phaser.GameObjects.BuildGameObject;var h=function(t,i,e,h,a){const n=t||0,d=i||0,l=e||100,g=h||100,c=Math.max(Math.min(r(a,"progress",1),1),0),u=r(a,"orientation","horizontal"),x=r(a,"reverse",!1),p=Math.min(r(a,"radius",0),"horizontal"===u?g/2:l/2),f=r(a,"backgroundColor",0),y=r(a,"backgroundAlpha",.5),b=r(a,"color",16777215),m=r(a,"flat",!1),P=r(a,"indicators.enabled",!1),v=r(a,"indicators.color",0),w=r(a,"indicators.alpha",.1),O=r(a,"indicators.size",2),C=r(a,"indicators.distance",.1),_=r(a,"text.enabled",!1),M=r(a,"text.style",!1),S=r(a,"text.format",t=>t),F=r(a,"text.origin.x",.5),R=r(a,"text.origin.y",.5),j=r(a,"text.align.x","center"),A=r(a,"text.align.y","center"),G=r(a,"padding",5),T=new s(this.scene,n,d,l,g,{progress:c,orientation:u,reverse:x,radius:p,backgroundColor:f,backgroundAlpha:y,color:b,flat:m,indicators:{enabled:P,color:v,alpha:w,size:O,distance:C},text:{enabled:_,format:S,style:M,origin:{x:F,y:R},align:{x:j,y:A}},padding:G});return o(this.scene,T,Object.assign(a,{x:n,y:d,add:!0})),T};e.d(i,"default",(function(){return a}));class a extends Phaser.Plugins.BasePlugin{constructor(t){super(t),t.registerGameObject("easyProgressbar",h)}}}])}));