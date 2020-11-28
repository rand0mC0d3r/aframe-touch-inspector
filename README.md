# A-Frame-Touch-Inspector (💣 Experimental)
![](https://badgen.net/bundlephobia/min/aframe-touch-inspector) ![](https://badgen.net/bundlephobia/minzip/aframe-touch-inspector)

Based on A-Frame Inspector ([Original project](https://github.com/aframevr/aframe-inspector))

*👏 Project is detached clone from the original A-Frame Inspector that honors the same engine and lib model, but it has been refactored partly & carefully to ensure backwards compatibility while improving the structure and functionality. It aims to not replace, but offer itself as an alternative to the original dual panel interface, by offering a more Whiteboard tool driven approach based on transparency and decoupled interfaces.*

Please note that to my best abilities i try to keep an eye on the original project issues and reported bugs and to keep fixing it on this project.

**⏰ Current state**: The project is as of now not ready for prime-time and time cannot be allocated as for a 09:00-18:00 job, but it's a dear project and I will keep improving it and one day release the first version.

---
### 🪀 Screenshots & Preview Demo

Below is the demo and some screenshots of different menus and panels

### **[👀 DEMO](https://rand0mc0d3r.github.io/aframe-touch-inspector/examples/)**

| Configuration | Scenegraph |
| -      |  ------ |
| ![](/images/configuration.png)   | ![](/images/scenegraph.png) |


---

### 📺 JsFiddle example (native JS + 📡)

*NOTE: Mind the console that can be hidden.*

https://jsfiddle.net/s3x4nmhj/

### 💻 Local Installation

```
// with npm
npm i aframe-touch-inspector

// with yarn
yarn add aframe-touch-inspector
```

### 📡 Remote fetching

```
https://unpkg.com/aframe-touch-inspector@1.0.1/dist/aframe-inspector.min.js

// Somewhere in <head>
// <script src="https://unpkg.com/aframe-touch-inspector@1.0.1/dist/aframe-inspector.min.js"></script>
```

---

### 📝 Inherited documentation

Previous documentation can be found here: [A-Frame Inspector](https://github.com/aframevr/aframe-inspector/blob/master/README.md)

The foundation, event sending and mechanics along with processing and exporting functions were mainly preserved, yet refactored to feature components described as functional entities.


---

### 🗺️ Usage & Documentation

The inspector, once instantiated adds to the current scene a custom camera over the existing A-Frame camera, and a few controls along with a grid structure.

The UI features in the bottom side, form left to right:
- 📷 a camera controller with zoom in / reset / out;
- ♻️ a panel for rotate / translate and scale
- 👁️ a preview panel that based on the raycaster's target offers an overview of the selected ```a-entity```.
- 🎚️ a switch to turn off / on the inspector mode (*upon clicking the enhancements are removed or added back*)
- 2 x 📰 panels for properties
    - 📑 a listing module that represents the entities
    - 🎛️ a control box for a selected entity to adjust

For most panels further documentation is not needed as the functionality aims to be self-explanatory and guided. Along various panels, tooltips, documentation links and further explanations are provided on the spot if needed.

---

### 🔨 Changed feature set

- Installed **Material-UI**
- Installed **Styled-Components**
- Added a full-screen toggle
- Added **font-awesome** to the build-chain (removed as injection)
- Made the elements able to deselect
- De-constructed the menu to be more tablet friendly
- Added visual effects to allow moving over surfaces
- Added guidance cursors for predictable actions
- Refactored the component adding to be a modal
- Refactored checkboxes as switches
- Added iconography to component properties
- Added component specific documentation links to A-Frame relevant page
- Added iconography to component descriptors and enhanced preview mechanic
- Added default zoom view, and zoom in and out. In a transparent format
- Updated transparency and borders for better clarity over various contrast tests
- Refactored components of entities to represent their icons more compact in the preview hover
- Refactored preview hover nesting and cursor / selection functionality

**🗑️ Removals:**
- For now removed the camera/perspective switcher

**🔧 Practical:**
- Refactored example to feature more groups and consistent naming
- Removed environment library usage as it's model is not stable but generative
- Disabled WebPack WDS logging from socket in DevTools
- Removed Package-Name-Generator due to entire lodash dependency. Replaced with random string generator;

**📐 Technical:**
- Refactored most components to functional files
- Refactored components to use the atomic-design pattern
- Consolidated lifecycle Event listener removal
- Enabled parallel (4 core) building WebPack specifically for Terser
- Updated toolchain
- Added scripts for webpack bundle explorer (**deprecated**)
- Added BundleAnalyzerPlugin for better analysis
- Converted thread-blocking bundleAnalyzer to non blocking block chain
- Added for all functional-hook oriented components correct teardowns on Event listeners
- Added flagging on entity conversion flags to differentiate behavior where relevant

**🐞 Known bugs:**
- Scenegraph cannot re-expand a collapsed group
- Visibility of an entity cannot be restored once disabled

**💡 ToDo:**
- Make selection bounding box toggle-able
- Refactor 3 way transform toolbar to be similar to MsPaint in Windows10

---

### 🧱 Local Development

```bash
git clone git@github.com:aframevr/aframe-inspector.git
cd aframe-inspector
npm install
npm start
```

Then navigate to __[http://localhost:3333/examples/](http://localhost:3333/examples/)__

[travis-image]: https://img.shields.io/travis/aframevr/aframe-inspector.svg?style=flat-square
[travis-url]: https://travis-ci.org/aframevr/aframe-inspector

---

### 📦 Package evaluation

```
npm run explorer
```

**NOTE-WIP**: package size is double+ than before, but the refactoring is mid-flight and there are duplicate dependencies

![Explorer stats](/images/explorer.png)

### 😄 You

**If** you find it useful but buggy, file an issue.
-- *Would try to honor it in a quick span of time.*

**If** you have ideas, still file a new issue and explain how you envision it.
-- *Will gladly consider all submissions and if not on the spot try to consier it during refactoring and architecture updates*

**If** you rely on it and i broke it..
-- *Sorry, please file an issue and help me patch it*




---

Cheers
# 🤗
