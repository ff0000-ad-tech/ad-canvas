##### RED Interactive Agency - Ad Technology

[![npm
(tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-canvas)
[![GitHub
issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas)
[![npm
downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-canvas)

[![GitHub
contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/graphs/contributors/)
[![GitHub
commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/commits/master)
[![npm
license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/blob/master/LICENSE)
[![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Ad Canvas

This lightweight package is a simple-to-use tool that makes it easy to create animation, masking, layering, blend modes,
and drawing all sorts of graphical content, such as:

- Vector paths
- Shapes
- Bitmaps
- Videos
- Text

Read more about some of the ways this framework compares to vanilla javascript in the Why
CanvasDrawer? section.

Getting Started

Canvas Elements

Features

Tweening

# Getting Started

It may be beneficial to familiarize yourself with the syntax of
[ad-ui](https://github.com/ff0000-ad-tech/ad-ui/blob/master/README.md), as there are many similarities. Or, this can be
your stepping stone to ad-ui!

### CanvasDrawer

Make a new `CanvasDrawer` instance - this instance will house whatever elements you create

```javascript
let myCanvasDrawer = new CanvasDrawer({
    target: myDomElement,
    css: {
        width: 300,
        height: 250
    },
    debug: true,
    retina: true
})
```

In this example, we create a new `UICanvas` DOM element (which can be referenced as `myCanvasDrawer.canvas`).
Setting `retina: true` means the canvas will render at double-density. Setting `debug: true` adds a background
color so that we can see the `canvas` element, which is transparent otherwise.

### **Rendering**

CanvasDrawer has an `update()` method which must be called any time you make a change and want to see it.

# CanvasElements

A `CanvasElement` is the broad term for anything that is drawn within the CanvasDrawer framework. It refers to:

- [CanvasImage](./docs/CanvasImage.md) - use a bitmap, canvas, CanvasDrawer, or video source to make image data
- [CanvasRect](./docs/CanvasRect.md) - create a rectangle
- [CanvasCircle](./docs/CanvasCircle.md) - create an arc, semi circle, or circle
- [CanvasPath](./docs/CanvasPath.md) - use points and curves to create a pathed shape
- [CanvasText](./docs/CanvasText.md) - write text into a canvas

### Example

Draw a bitmap data into a `CanvasDrawer`. In this example, the source is referenced by the name of the bitmap, as
ID'd by [ImageManager](https://github.com/ff0000-ad-tech/ad-control/blob/master/README.md) - this might be "myBitmap.png"` for instance.

```javascript
let myImage = new CanvasImage({
    target: myCanvasDrawer,
    id: 'myCanvasImage'
    source: "myBitmap",
    params: {
        width: 300,
        height: 250
    }
})

// setting the alpha by ID
myCanvasDrawer.elements.myCanvasImage.alpha = 0.5

// setting the alpha by variable
myImage.alpha = 0.5

// re-render the CanvasDrawer to ensure update is seen
myCanvasDrawer.update()
```

# Features

These `CanvasElement`s can have features such as:

- drop shadows
- rotation, scale, alpha
- strokes

There are also additional classes that, if imported, will open up other features to you, such as:

- [blur](./docs/CanvasBlur.md)
- [masking](./docs/CanvasBlendMode.md)
- [tweening](./docs/CanvasTweener.md)
- [patterns](./docs/CanvasTexture.md)
- [gradients](./docs/CanvasTexture.md)
- [blend modes](./docs/CanvasBlendMode.md)
- [color transformation effects](./docs/CanvasColoring.md)

# Tweening

Tweening a `CanvasElement` is as easy as initializing it through `CanvasTweener` - it's an additional load that you
might not want, so we give you the option.

```javascript
// injects tweening capability into a CanvasDrawer instance
CanvasTweener.init(myCanvasDrawer)

// call the CanvasElement to tween by a variable definition
myCanvasDrawer.tween.to(myImage, 2, { rotation: 90, alpha: 0 })
// call the CanvasElement to tween by an ID
myCanvasDrawer.tween.to("myCanvasImage", 2, { rotation: 90, alpha: 0 })

myCanvasDrawer.tween.fromTo(myShape, 2, { scale: 0 }, { scale: 1, ease: Back.easeOut })

myCanvasDrawer.tween.start()
```

This `tween` object that is part of your `CanvasDrawer` instance uses the same format as [GreenSock's Tween
Package](https://greensock.com/). However, since HTML5 canvas requires refreshing in order to render changes,
`CanvasTweener` takes care of that for us without having to write `update()` calls elsewhere. The
`myCanvasDrawer.tween.start()` method ensures these tweens don't begin until we're ready to call all of them.

# Why CanvasDrawer?

### It's a lightweight package!

- Using every nook and cranny the `CanvasDrawer` suite has to offer only adds an additional **_40k_** to your file
size.
- Compare that to other packages which are **_150k or higher_**, and you have a fast-loading platform with powerful
features giving you the best possible tools for quick development and stunning animations.

### The grunt-work has been done for you

- The classes that allow for blurring, color transformations, etc are there to save you, the user, the effort of
researching how to build and keep track of these effects.

### Animations are straightfoward

- With vanilla `Canvas2D`, animation becomes complicated. There are no native object declarations or stored values:
you must work that logic out yourself, and constantly call verbose code in order to render graphics.

Compare some vanilla canvas drawing to how it might look using `CanvasDrawer`:

```javascript
// any time you want to draw the image at a different X, Y, width, or height, 
// you need to clear your canvas ...
ctx.clearRect(0, 0, 100, 200);

// and if you want to scale, rotate, or change the alpha, that's another kind of logic 
// you must develop code for and
manage yourself
ctx.save();
ctx.globalAlpha = 0.5;
ctx.rotate(Math.PI);
ctx.restore();

// finally, make a verbose call to the context to draw all images you may have created
ctx.drawImage(img1, 10, 10, 100, 200);
ctx.drawImage(img2, 0, 0, 50, 50);
ctx.drawImage(img3, 100, 30, 60, 60);

// and how do you animate this? How do you get your image to move its x-coordinate using TweenLite?
TweenLite.to(???, 1, {x: 200, onUpdate: function(){
    ctx.clearRect(...)
    ctx.drawImage(...)
}})
// sounds exhausting, and you're going erase every other image you added unless you put in 
// additional conditions to re-draw them.
```

`CanvasDrawer` makes the simple act or redrawing and moving elements easy, saving you file size and processing by
packaging the creation and storage of a canvas' drawable data in objects easy to manipulate:

```javascript
myCanvasImage1.x = 10;
myCanvasImage2.rotation = 20;
myCanvasImage3.alpha = 0.5;

myCanvasDrawer.tween.to(myCanvasImage1, 1, { x: 200 });
myCanvasDrawer.tween.start();
// easy peasy, lemon squeezy
```

* * *

# API

## <a name="CanvasBlendMode" href="./docs/CanvasBlendMode.md">CanvasBlendMode</a>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.NONE">.NONE</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.UNDER">.UNDER</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.SOURCE_IN">.SOURCE_IN</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.SOURCE_OUT">.SOURCE_OUT</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.SOURCE_ATOP">.SOURCE_ATOP</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.DEST_IN">.DEST_IN</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.DEST_OUT">.DEST_OUT</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.DEST_ATOP">.DEST_ATOP</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.XOR">.XOR</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.COPY">.COPY</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.ADD">.ADD</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.DARKEN">.DARKEN</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.LIGHTEN">.LIGHTEN</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.OVERLAY">.OVERLAY</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.MULTIPLY">.MULTIPLY</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.SCREEN">.SCREEN</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.DODGE">.DODGE</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.BURN">.BURN</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.HARD">.HARD</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.SOFT">.SOFT</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.DIFFERENCE">.DIFFERENCE</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.EXCLUSION">.EXCLUSION</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.HUE">.HUE</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.SATURATION">.SATURATION</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.COLOR">.COLOR</a> : <code>string</code>
* <a href="./docs/CanvasBlendMode.md#CanvasBlendMode.LUMINOSITY">.LUMINOSITY</a> : <code>string</code>
## <a name="CanvasBlur" href="./docs/CanvasBlur.md">CanvasBlur</a>
* <a href="./docs/CanvasBlur.md#CanvasBlur.set">.set(obj)</a>
## <a name="CanvasCircle" href="./docs/CanvasCircle.md">CanvasCircle</a>
* new CanvasCircle(circObj)
* <a href="./docs/CanvasCircle.md#CanvasCircle.x">.x</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.y">.y</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.width">.width</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.radius">.radius</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.rotation">.rotation</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.alpha">.alpha</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.scale">.scale</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.scaleX">.scaleX</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.scaleY">.scaleY</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.blendMode">.blendMode</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.visible">.visible</a> : <code>boolean</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.transformOrigin">.transformOrigin</a> : <code>string</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.fill">.fill</a> : <code>string</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokeFill">.strokeFill</a> : <code>string</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokeWidth">.strokeWidth</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokeCap">.strokeCap</a> : <code>string</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokeJoin">.strokeJoin</a> : <code>string</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokePosition">.strokePosition</a> : <code>string</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokeDashSize">.strokeDashSize</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokeDashGap">.strokeDashGap</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.strokeDashOffset">.strokeDashOffset</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.shadowColor">.shadowColor</a> : <code>string</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.shadowBlur">.shadowBlur</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.shadowAngle">.shadowAngle</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.shadowDistance">.shadowDistance</a> : <code>number</code>
* <a href="./docs/CanvasCircle.md#CanvasCircle.id">.id</a> : <code>string</code>
## <a name="CanvasColoring" href="./docs/CanvasColoring.md">CanvasColoring</a>
* <a href="./docs/CanvasColoring.md#CanvasColoring.hue">.hue(obj)</a>
* <a href="./docs/CanvasColoring.md#CanvasColoring.saturation">.saturation(obj)</a>
* <a href="./docs/CanvasColoring.md#CanvasColoring.contrast">.contrast(obj)</a>
* <a href="./docs/CanvasColoring.md#CanvasColoring.tint">.tint(obj)</a>
* <a href="./docs/CanvasColoring.md#CanvasColoring.transform">.transform(obj)</a>
* <a href="./docs/CanvasColoring.md#CanvasColoring.invert">.invert(obj)</a>
## <a name="CanvasDisplaceChannel" href="./docs/CanvasDisplaceChannel.md">CanvasDisplaceChannel</a>
* <a href="./docs/CanvasDisplaceChannel.md#CanvasDisplaceChannel.RED">.RED</a> : <code>number</code>
* <a href="./docs/CanvasDisplaceChannel.md#CanvasDisplaceChannel.GREEN">.GREEN</a> : <code>number</code>
* <a href="./docs/CanvasDisplaceChannel.md#CanvasDisplaceChannel.BLUE">.BLUE</a> : <code>number</code>
* <a href="./docs/CanvasDisplaceChannel.md#CanvasDisplaceChannel.ALPHA">.ALPHA</a> : <code>number</code>
## <a name="CanvasDisplacementMap" href="./docs/CanvasDisplacementMap.md">CanvasDisplacementMap</a>
* new CanvasDisplacementMap(imgObj)
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.source">.source</a> : <code>CanvasDrawer</code> \| <code>UICanvas</code> \| <code>canvas</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.map">.map</a> : <code>CanvasDrawer</code> \| <code>UICanvas</code> \| <code>canvas</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.target">.target</a> : <code>CanvasDrawer</code> \| <code>UICanvas</code> \| <code>canvas</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.x">.x</a> : <code>number</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.y">.y</a> : <code>number</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.scaleX">.scaleX</a> : <code>number</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.scaleY">.scaleY</a> : <code>number</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.channelX">.channelX</a> : <code>CanvasDisplaceChannel</code> \| <code>number</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.channelY">.channelY</a> : <code>CanvasDisplaceChannel</code> \| <code>number</code>
* <a href="./docs/CanvasDisplacementMap.md#CanvasDisplacementMap.draw">.draw()</a>
## <a name="CanvasDrawer" href="./docs/CanvasDrawer.md">CanvasDrawer</a>
* new CanvasDrawer(arg)
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.canvas">.canvas</a> : <code>UICanvas</code>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.ctx">.ctx</a>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.clearCanvas">.clearCanvas</a> : <code>boolean</code>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.qualityScale">.qualityScale</a> : <code>number</code>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.elements">.elements</a> : <code>object</code>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.elementsLength">.elementsLength</a> : <code>number</code>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.width">.width</a> : <code>number</code>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.height">.height</a> : <code>number</code>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.removeElement">.removeElement(target)</a>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.removeAllElements">.removeAllElements()</a>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.clear">.clear()</a>
* <a href="./docs/CanvasDrawer.md#CanvasDrawer.update">.update()</a>
## <a name="CanvasElement" href="./docs/CanvasElement.md">CanvasElement</a>
* new CanvasElement()
## <a name="CanvasImage" href="./docs/CanvasImage.md">CanvasImage</a>
* new CanvasImage(imgObj)
* <a href="./docs/CanvasImage.md#CanvasImage.x">.x</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.y">.y</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.width">.width</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.sourceX">.sourceX</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.sourceY">.sourceY</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.sourceW">.sourceW</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.sourceH">.sourceH</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.height">.height</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.rotation">.rotation</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.alpha">.alpha</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.scale">.scale</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.scaleX">.scaleX</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.scaleY">.scaleY</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.blendMode">.blendMode</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.visible">.visible</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.transformOrigin">.transformOrigin</a> : <code>string</code>
* <a href="./docs/CanvasImage.md#CanvasImage.shadowColor">.shadowColor</a> : <code>string</code>
* <a href="./docs/CanvasImage.md#CanvasImage.shadowBlur">.shadowBlur</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.shadowAngle">.shadowAngle</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.shadowDistance">.shadowDistance</a> : <code>number</code>
* <a href="./docs/CanvasImage.md#CanvasImage.id">.id</a> : <code>string</code>
## <a name="CanvasLineTo" href="./docs/CanvasLineTo.md">CanvasLineTo</a>
* <a href="./docs/CanvasLineTo.md#CanvasLineTo.MOVE">.MOVE</a> : <code>string</code>
* <a href="./docs/CanvasLineTo.md#CanvasLineTo.LINE">.LINE</a> : <code>string</code>
* <a href="./docs/CanvasLineTo.md#CanvasLineTo.QUAD">.QUAD</a> : <code>string</code>
* <a href="./docs/CanvasLineTo.md#CanvasLineTo.BEZIER">.BEZIER</a> : <code>string</code>
* <a href="./docs/CanvasLineTo.md#CanvasLineTo.ARC">.ARC</a> : <code>string</code>
## <a name="CanvasPath" href="./docs/CanvasPath.md">CanvasPath</a>
* new CanvasPath(pathObj)
* <a href="./docs/CanvasPath.md#CanvasPath.x">.x</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.y">.y</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.rotation">.rotation</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.alpha">.alpha</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.scale">.scale</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.scaleX">.scaleX</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.scaleY">.scaleY</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.blendMode">.blendMode</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.visible">.visible</a> : <code>boolean</code>
* <a href="./docs/CanvasPath.md#CanvasPath.length">.length</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.transformOrigin">.transformOrigin</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.fill">.fill</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokeFill">.strokeFill</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokeWidth">.strokeWidth</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokeCap">.strokeCap</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokeJoin">.strokeJoin</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokePosition">.strokePosition</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokeDashSize">.strokeDashSize</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokeDashGap">.strokeDashGap</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.strokeDashOffset">.strokeDashOffset</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.shadowColor">.shadowColor</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.shadowBlur">.shadowBlur</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.shadowAngle">.shadowAngle</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.shadowDistance">.shadowDistance</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.id">.id</a> : <code>string</code>
* <a href="./docs/CanvasPath.md#CanvasPath.width">.width</a> : <code>number</code>
* <a href="./docs/CanvasPath.md#CanvasPath.height">.height</a> : <code>number</code>
## <a name="CanvasRect" href="./docs/CanvasRect.md">CanvasRect</a>
* new CanvasRect(rectObj)
* <a href="./docs/CanvasRect.md#CanvasRect.x">.x</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.left">.left</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.y">.y</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.top">.top</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.width">.width</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.height">.height</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.rotation">.rotation</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.alpha">.alpha</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.opacity">.opacity</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.scale">.scale</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.scaleX">.scaleX</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.scaleY">.scaleY</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.blendMode">.blendMode</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.visible">.visible</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.transformOrigin">.transformOrigin</a> : <code>string</code>
* <a href="./docs/CanvasRect.md#CanvasRect.fill">.fill</a> : <code>string</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokeFill">.strokeFill</a> : <code>string</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokeWidth">.strokeWidth</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokeCap">.strokeCap</a> : <code>string</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokeJoin">.strokeJoin</a> : <code>string</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokePosition">.strokePosition</a> : <code>string</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokeDashSize">.strokeDashSize</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokeDashGap">.strokeDashGap</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.strokeDashOffset">.strokeDashOffset</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.shadowColor">.shadowColor</a> : <code>string</code>
* <a href="./docs/CanvasRect.md#CanvasRect.shadowBlur">.shadowBlur</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.shadowAngle">.shadowAngle</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.shadowDistance">.shadowDistance</a> : <code>number</code>
* <a href="./docs/CanvasRect.md#CanvasRect.id">.id</a> : <code>string</code>
## <a name="CanvasShape" href="./docs/CanvasShape.md">CanvasShape</a>
* new CanvasShape()
## <a name="CanvasSprite" href="./docs/CanvasSprite.md">CanvasSprite</a>
* new CanvasSprite()
## <a name="CanvasText" href="./docs/CanvasText.md">CanvasText</a>
* new CanvasText(textObj)
* <a href="./docs/CanvasText.md#CanvasText.x">.x</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.left">.left</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.y">.y</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.top">.top</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.rotation">.rotation</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.alpha">.alpha</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.opacity">.opacity</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.scale">.scale</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.scaleX">.scaleX</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.scaleY">.scaleY</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.blendMode">.blendMode</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.visible">.visible</a> : <code>boolean</code>
* <a href="./docs/CanvasText.md#CanvasText.transformOrigin">.transformOrigin</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.fontFamily">.fontFamily</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.fontSize">.fontSize</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.lineHeight">.lineHeight</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.maxWidth">.maxWidth</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.alignText">.alignText</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.fill">.fill</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.strokeFill">.strokeFill</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.strokeWidth">.strokeWidth</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.strokeJoin">.strokeJoin</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.strokePosition">.strokePosition</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.strokeDashSize">.strokeDashSize</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.strokeDashGap">.strokeDashGap</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.strokeDashOffset">.strokeDashOffset</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.shadowColor">.shadowColor</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.shadowBlur">.shadowBlur</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.shadowAngle">.shadowAngle</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.shadowDistance">.shadowDistance</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.id">.id</a> : <code>string</code>
* <a href="./docs/CanvasText.md#CanvasText.width">.width</a> : <code>number</code>
* <a href="./docs/CanvasText.md#CanvasText.height">.height</a> : <code>number</code>
## <a name="CanvasTexture" href="./docs/CanvasTexture.md">CanvasTexture</a>
* <a href="./docs/CanvasTexture.md#CanvasTexture.makeLinearGradient">.makeLinearGradient(args)</a>
* <a href="./docs/CanvasTexture.md#CanvasTexture.makeRadialGradient">.makeRadialGradient(args)</a>
* <a href="./docs/CanvasTexture.md#CanvasTexture.makePattern">.makePattern(args)</a>
## <a name="CanvasTiling" href="./docs/CanvasTiling.md">CanvasTiling</a>
* <a href="./docs/CanvasTiling.md#CanvasTiling.X">.X</a> : <code>string</code>
* <a href="./docs/CanvasTiling.md#CanvasTiling.Y">.Y</a> : <code>string</code>
* <a href="./docs/CanvasTiling.md#CanvasTiling.XY">.XY</a> : <code>string</code>
* <a href="./docs/CanvasTiling.md#CanvasTiling.NONE">.NONE</a> : <code>string</code>
## <a name="CanvasTweener" href="./docs/CanvasTweener.md">CanvasTweener</a>
* <a href="./docs/CanvasTweener.md#CanvasTweener.tween">.tween</a> : <code>object</code>
* <a href="./docs/CanvasTweener.md#CanvasTweener.init">.init(target)</a>
* <a href="./docs/CanvasTweener.md#CanvasTweener.start">.start(args)</a>
* <a href="./docs/CanvasTweener.md#CanvasTweener.kill">.kill()</a>
## <a name="CanvasUtils" href="./docs/CanvasUtils.md">CanvasUtils</a>
* <a href="./docs/CanvasUtils.md#CanvasUtils.getImageData">.getImageData(source)</a>
* <a href="./docs/CanvasUtils.md#CanvasUtils.setImageData">.setImageData(target, data)</a>

* * *