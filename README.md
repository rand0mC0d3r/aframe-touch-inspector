Based on A-Frame Inspector (https://github.com/aframevr/aframe-inspector)
# Custom-Inspector (Touch-Friendly)

Previous documentation can be found here: [A-Frame Inspector](https://github.com/aframevr/aframe-inspector/blob/master/README.md)

A visual inspector tool for [A-Frame](https://aframe.io) scenes. Just hit
`<ctrl> + <alt> + i` on any A-Frame scene to open up the Inspector.


![Inspector Preview](https://user-images.githubusercontent.com/674727/50159991-fa540c80-028c-11e9-87f1-72c54e08d808.png)

## Changed feature set

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

**Removals:**
- For now removed the camera/perspective switcher

**Practical:**
- Refactored example to feature more groups and consistent naming
- Removed environment library usage as it's model is not stable but generative
- Disabled WebPack WDS logging from socket in DevTools

**Technical:**
- Refactored most components to functional files
- Refactored components to use the atomic-design pattern
- Consolidated lifecycle Event listener removal
- Updated toolchain
- Added scripts for webpack bundle explorer

**ToDo:**
- Make selection bounding box toggle-able
- Refactor 3 way transform toolbar to be similar to MsPaint in Windows10


## Local Development

```bash
git clone git@github.com:aframevr/aframe-inspector.git
cd aframe-inspector
npm install
npm start
```

Then navigate to __[http://localhost:3333/examples/](http://localhost:3333/examples/)__

[travis-image]: https://img.shields.io/travis/aframevr/aframe-inspector.svg?style=flat-square
[travis-url]: https://travis-ci.org/aframevr/aframe-inspector
