##### RED Interactive Agency - Ad Technology

[![npm (tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-canvas)
[![GitHub issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas)
[![npm downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-canvas)

[![GitHub contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/graphs/contributors/)
[![GitHub commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/commits/master)
[![npm license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-canvas.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-canvas/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Ad Canvas

Package used to easily create HTML5 Canvas2D elements such as text, images, or shapes. These `CanvasElement`s can have features such as:

-   drop shadows
-   rotation, scale, alpha
-   strokes

There are also additional classes that, if imported, will open up other features to you, such as:

-   blur
-   masking
-   tweening
-   textures
-   gradients
-   blend modes
-   color transformation effects

[Getting Started](#getting-started)

[Blend Modes](#blend-modes)

[Masking](#masking)

[Tweening](#tweening)

# Getting Started

<a name="getting-started"></a>

It may be beneficial to familiarize yourself with the syntax of [ad-ui](https://github.com/ff0000-ad-tech/ad-ui/blob/master/README.md), as there are many similarities. Or, this can be your stepping stone to ad-ui!

### CanvasDrawer

Make a new CanvasDrawer instance - this instance will house whatever elements you create

```javascript
let _myCanvasDrawer = new CanvasDrawer({
    target: _myDomElement,
    css: {
        width: 300,
        height: 250
    },
    debug: true,
    retina: true
});
```

In this example, we create a new `UICanvas` DOM element. Setting `retina: true` means the canvas will be created at double size, but appear at the desired width and height. Any `CanvasImage`s added should be retina display, or they may render smaller than they appear.

Setting `debug: true` adds a background color so that we can see the `<canvas>` element, which is transparent otherwise.

# CanvasElements

A `CanvasElement` is the broad term for anything that is drawn within the CanvasDrawer framework. It refers to:

-   [CanvasImage](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasImage.html)
-   [CanvasRect](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasRect.html)
-   [CanvasCirc](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasCirc.html)
-   [CanvasPath](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasPath.html)
-   [CanvasText](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasText.html)

<a name="features"></a>

### CanvasImage

[Full documentation here](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasImage.html)

Draw an image (or even video) source into a CanvasDrawer. In this example, the source is referenced by the name of the bitmap, as ID'd by [ImageManager](https://github.com/ff0000-ad-tech/ad-control/blob/master/README.md) - this might be `"myBitmap.png"` for instance.

```javascript
let _myImage = new CanvasImage({
    target: _myCanvasDrawer,
    source: "myBitmap",
    params: {
        width: 300,
        height: 250
    }
});
```

### CanvasRect

[Full documentation here](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasRect.html)

Draw a red rectangle with a black dashed stroke into a CanvasDrawer.

```javascript
let _myRectangle = new CanvasRect({
    target: _myCanvasDrawer,
    params: {
        width: 300,
        height: 250
    },
    fill: "red",
    stroke: {
        fill: "black",
        width: 5,
        position: "outer",
        dashGap: 10,
        dazeSize: 10
    }
});
```

### CanvasCirc

[Full documentation here](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasCirc.html)

Draw a blue circle with a drop shadow into a CanvasDrawer.

```javascript
let _myCircle = new CanvasCirc({
    target: _myCanvasDrawer,
    params: {
        radius: 150,
        x: 10,
        y: 100
    },
    fill: "blue",
    dropShadow: {
        angle: 45,
        distance: 10,
        blur: 5,
        color: "#000000",
        alpha: 0.5
    }
});
```

### CanvasPath

[Full documentation here](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasPath.html)

Draw a shape full of beziers and curves and lines and points into a CanvasDrawer.

```javascript
let _myPath = new new CanvasPath({
    target: View.main.myCanvasDrawer,
    id: "myLines",
    params: {
        x: 100,
        y: 100
    },
    points: [
        { fun: CanvasLineTo.MOVE, points: [0.5, -3.5] },
        { fun: CanvasLineTo.BEZIER, points: [-3.5, -2.8, -3, 0.2, -2.5, 0.2] },
        { fun: CanvasLineTo.QUAD, points: [2, -3, 0.5, -3.5] }
    ],
    drawScale: 10, // this will one-time scale the point data by a factor of 10 - easy way to scale without relying on the 'scale' param, which can eat resources
    fill: "purple"
})();
```

### CanvasText

[Full documentation here](https://ff0000-ad-tech.github.io/ad-docs/pages/CanvasText.html)

Draw some text which will read "FF0000-Ad-Tech" into a CanvasDrawer.

```javascript
let _myText = new CanvasText({
    target: _myCanvasDrawer,
    text: "FF0000-Ad-Tech",
    css: {
        x: 0,
        y: 0,
        fontSize: 40,
        fontFamily: "FuturaBold",
        alignText: Align.LEFT,
        maxWidth: 50, // determines how wide the copy gets before a line break
        lineHeight: 100
    },
    fill: "black"
});
```

![Creative Server](https://github.com/ff0000-ad-tech/readme-assets/blob/master/wp-creative-server/full-app.png)

-   many sizes, many indexes
-   non-redundant, modular builds
-   watch states per size/index, optionally concurrent
-   debug & production bundles

![Dashboard](https://github.com/ff0000-ad-tech/readme-assets/blob/master/wp-creative-server/dashboard.png)

### Deploy Profiles

Manage deploy-profiles, Webpack settings, and any other collection data:

![Deploy Profile Settings](https://github.com/ff0000-ad-tech/readme-assets/blob/master/wp-creative-server/deploy-profile-settings.png)

### Browser

Enable navigation of assets/outputs:

![Browser](https://github.com/ff0000-ad-tech/readme-assets/blob/master/wp-creative-server/browser.png)

-   Open files in associated editor app
-   Open directories in system file manager

### Preview

Provide a localhost for quickly testing builds:

![Preview](https://github.com/ff0000-ad-tech/readme-assets/blob/master/wp-creative-server/preview.png)

-   Run compiled units in browser
-   Easily refresh
-   Open units in a stand-alone tab for measuring k-weight

### Tweening

Tweening a CanvasElement is as easy as initializing the `CanvasTweener` - it's an additional load that you might not want, so we give you the option.

```javascript
CanvasTweener.init(_myCanvasDrawer);

_myCanvasDrawer.tween.to(_myImage, 2, { rotation: 90, alpha: 0 });
_myCanvasDrawer.tween.fromTo(
    _myShape,
    2,
    { scale: 0 },
    { scale: 1, ease: Back.easeOut }
);

_myCanvasDrawer.tween.start();
```

This `tween` method that is part of your `CanvasDrawer` instance uses the same format as [GreenSock's Tween Package](https://greensock.com/). However, since HTML5 canvas requires refreshing in order to render changes, `CanvasTweener` takes care of that for us. The `_myCanvasDrawer.tween.start()` method ensures these tweens don't begin until we're ready to call all of them.

# Technical Overview

<a name="technical-overview"></a>

The Webpack scripts are independent of Creative Server. They run as their own process & communicate with Creative Server's REST API via https://github.com/ff0000-ad-tech/wp-process-manager.

Otherwise, Creative Server data is a proxy of the file-system, the only source of truth.

Persistant state is maintained by `profile.json`, `plugins.json`, and the like. Said state is then acquired by the Express/NodeJS runtime and is made available to the React/Redux view via RPC, on-demand, providing low-latency indication of:

1.  available sizes/indexes
2.  deploy profiles
3.  busy-state
4.  error-state
5.  last conpile time
6.  a view of the project file-system

### Default Hierarchy

Creative Server can be installed in your banner project. CS expects the following hierarchy:

```
. Project Context
├── 1-build
| ├── 300x250
| | ├── index.html
| | └── ...
| ├── 320x50
| | ├── index.html
| | └── ...
| └── ...
|
├── 2-debug
| └── ...
|
├── 3-traffic
| └── ...
|
├── package.json
├── plugins.json
├── webpack.config.js
└── ...
```

`npm install --save-dev @ff0000-ad-tech/wp-creative-server.git`

Installing adds the following to your project:

```
├── node_modules
| └── @ff0000-ad-tech
|  └── wp-creative-server
|   ├── index.js
|   └── ...
```

### Size Targets

Sizes will be discovered in `./[context]/['1-build']/...` on folder-names that match `/[0-9]+x[0-9]+/`.

### Index Targets

Indexes will be discovered in `./[context]/['1-build']/[size]/...` on file-names that match `/index/`.

# Plugins

<a name="plugins"></a>

### Declaring a Plugin

Add a `./plugins.json` at your `--context` location. It will contain an object with NPM-style dependencies, like:

```json
{
    "ad-es6-particles":
        "git+ssh://git@stash.ff0000.com:7999/at/ad-es6-particles.git",
    "@ff0000-ad-tech/cs-plugin-bulk-compile":
        "git+ssh://git@github.com:ff0000-ad-tech/cs-plugin-bulk-compile.git",
    "@ff0000-ad-tech/cs-plugin-vendor-indexes":
        "git+ssh://git@github.com:ff0000-ad-tech/cs-plugin-vendor-indexes.git"
}
```

### Writing a Plugin

A plugin can be a frontend tool that runs in the browser ("app" style plugin) and makes calls to a system-level backend. Or it can simply hook into various UI elements
in the app and spawn system-level operations ("api" style plugin).

To make your plugin compatible, the following object must be added to your plugin's `package.json`:

```javascript
	"name": "ad-es6-particles", // standard NPM name
	...
	"wp-creative-server": {
		"routes": {
			"app": "/dist", // route to the directory in your plugin that will be served as the app root
			"api": "/lib/api.js" // route to the Node script in your plugin that will be used as the API endpoint
		},
		"hooks": {
			"size-control": {
				"Particle Simulator": "/app/index.html" // the query to either "/app/" or "api", plus whatever static paths & params are needed
			}
		}
	}
```

#### Plugin Routes

Once a plugin is installed in your `--context`'s `node_modules`, Creative Server will create several routes, based on the plugin's `package.json`.
These will be available on the server like:

```
http://10.0.7.126:5200/ad-es6-particles
```

All plugin routes are sent the following:

-   `api` - Creative Server endpoint URL
-   `folders.build` - name of the build folder
-   `folders.debug` - name of the debug folder
-   `folders.traffic` - name of the traffic folder

#### Plugin Hooks

Hooks are various UI-elements in Creative Server to which plugins can be attributed. Depending on the hook, additional data is passed.

Currently available hooks are:

1.  `size-control` - your command will appear in a menu next to each ad-size. It will be passed:

    -   `size` - the requested size-folder name.

2.  `bulk-control` - your command will appear in a drop-down that will execute when the 🔥 is clicked. It will be passed:
    -   `profile` - name of the currently selected deploy profile (also the folder to which traffic-compiled ads are output)
    -   `targets` - an object with keys specifying paths to traffic-compiled output folders

# CS Frontend Development

<a name="cs-frontend-development"></a>

To build the React/Redux/ES6 frontend:

1.  Install all of the dev-dependencies.
2.  Run `npm run build`
