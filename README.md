##### RED Interactive Agency - Ad Technology

[![npm (tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-canvas)
[![GitHub issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas)
[![npm downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-canvas)

[![GitHub contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/graphs/contributors/)
[![GitHub commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/commits/master)
[![npm license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Ad Canvas

Package used to easily create HTML5 Canvas2D elements such as text, images, or shapes.

[Getting Started](#getting-started)

[Features](#features)

[Tweening](#tweening)

# Getting Started

<a name="getting-started"></a>

It may be beneficial to familiarize yourself with the syntax of [ad-ui](https://github.com/ff0000-ad-tech/ad-ui/blob/master/README.md), as there are many similarities. Or, this can be your stepping stone to ad-ui!

### CanvasDrawer

Make a new CanvasDrawer instance - this instance will house whatever elements you create

```javascript
let myCanvasDrawer = new CanvasDrawer({
    target: myDomElement,
    css: {
        width: 300,
        height: 250
    },
    debug: true,
    retina: true
});
```

In this example, we create a new `UICanvas` DOM element (which can be referenced as `myCanvasDrawer.canvas`). Setting `retina: true` means the canvas will render at double-density. Setting `debug: true` adds a background color so that we can see the `<canvas>` element, which is transparent otherwise.

### Rendering

CanvasDrawer has an `update()` method which must be called any time you make a change and want to see it.

# CanvasElements

A `CanvasElement` is the broad term for anything that is drawn within the CanvasDrawer framework. It refers to:

-   [CanvasImage](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasImage.html) - use a bitmap, canvas, CanvasDrawer, or video source to make image data
-   [CanvasRect](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasRect.html) - create a rectangle
-   [CanvasCircle](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasCircle.html) - create an arc, semi circle, or circle
-   [CanvasPath](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasPath.html) - use points and curves to create a pathed shape
-   [CanvasText](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasText.html) - write text into a canvas

### Example

Draw a bitmap data into a CanvasDrawer. In this example, the source is referenced by the name of the bitmap, as ID'd by [ImageManager](https://github.com/ff0000-ad-tech/ad-control/blob/master/README.md) - this might be `"myBitmap.png"` for instance.

```javascript
let myImage = new CanvasImage({
    target: myCanvasDrawer,
    id: 'myCanvasImage'
    source: "myBitmap",
    params: {
        width: 300,
        height: 250
    }
});

// setting the alpha by ID
myCanvasDrawer.elements.myCanvasImage.alpha = 0.5

// setting the alpha by variable
myImage.alpha = 0.5

// re-render the CanvasDrawer to ensure update is seen
myCanvasDrawer.update()
```

# Features

<a name="features"></a>

These `CanvasElement`s can have features such as:

-   drop shadows
-   rotation, scale, alpha
-   strokes

There are also additional classes that, if imported, will open up other features to you, such as:

-   [blur](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasBlur.html)
-   [masking](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasBlendMode.html#.DEST_ATOP__anchor)
-   [tweening](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasTweener.html)
-   [patterns](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasTexture.html#.makePattern__anchor)
-   [gradients](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasTexture.html#.makeLinearGradient__anchor)
-   [blend modes](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasBlendMode.html)
-   [color transformation effects](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasColoring.html)

# Tweening

<a name="tweening"></a>

[Full documentation available](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasTweener.html)

Tweening a CanvasElement is as easy as initializing it through `CanvasTweener` - it's an additional load that you might not want, so we give you the option.

```javascript
// injects tweening capability into a CanvasDrawer instance
CanvasTweener.init(myCanvasDrawer);

// call the CanvasElement to tween by a variable definition
myCanvasDrawer.tween.to(myImage, 2, { rotation: 90, alpha: 0 });
// call the CanvasElement to tween by an ID
myCanvasDrawer.tween.to("myCanvasImage", 2, { rotation: 90, alpha: 0 });

myCanvasDrawer.tween.fromTo(
    myShape,
    2,
    { scale: 0 },
    { scale: 1, ease: Back.easeOut }
);

myCanvasDrawer.tween.start();
```

This `tween` object that is part of your `CanvasDrawer` instance uses the same format as [GreenSock's Tween Package](https://greensock.com/). However, since HTML5 canvas requires refreshing in order to render changes, `CanvasTweener` takes care of that for us without having to write `update()` calls elsewhere. The `myCanvasDrawer.tween.start()` method ensures these tweens don't begin until we're ready to call all of them.
