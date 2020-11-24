# A-Frame-Touch-Inspector (WIP)
![](https://badgen.net/bundlephobia/min/aframe-touch-inspector) ![](https://badgen.net/bundlephobia/minzip/aframe-touch-inspector)

 Based on A-Frame Inspector ([Original project](https://github.com/aframevr/aframe-inspector))

---
### 🪀 Demo (Client side)

<p>
  <img width="300" src="/images/configuration.png" alt="Configuration menu" />
  <img width="300" src="/images/scenegraph.png" alt="Scene-graph" />
</p>

**[Preview Touch Interface](https://rand0mc0d3r.github.io/aframe-touch-inspector/examples/)**

---

### Local Installation

```
// with npm
npm i aframe-touch-inspector

// with yarn
yarn add aframe-touch-inspector
```

### Remote fetching

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

**💡 ToDo:**
- Make selection bounding box toggle-able
- Refactor 3 way transform toolbar to be similar to MsPaint in Windows10

---

### Local Development

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

### Package evaluation

```
npm run explorer
```

**NOTE-WIP**: package size is double+ than before, but the refactoring is mid-flight and there are duplicate dependencies

![Explorer stats](/images/explorer.png)