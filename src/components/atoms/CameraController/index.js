import React from 'react';
import Button from '@material-ui/core/Button';

const zoomY = 1.5;
const zoomZ = 1.5;
// let sceneCamera = window.AFRAME.scenes[0].camera;

export default () => {
  const handleZoomOut = () => {
    let position = window.AFRAME.scenes[0].camera.position;
    window.AFRAME.scenes[0].camera.position.y = position.y + zoomY;
    window.AFRAME.scenes[0].camera.position.z = position.z + zoomZ;
    window.AFRAME.scenes[0].camera.lookAt(0, 0, 0);
  };

  const handleZoomIn = () => {
    let position = window.AFRAME.scenes[0].camera.position;
    window.AFRAME.scenes[0].camera.position.y = Math.max(position.y - zoomY, 0);
    window.AFRAME.scenes[0].camera.position.z = position.z - zoomZ;
    window.AFRAME.scenes[0].camera.lookAt(0, 0, 0);
  };

  const handleZoomReset = () => {
    window.AFRAME.scenes[0].camera.position.x = 0;
    window.AFRAME.scenes[0].camera.position.y = 10;
    window.AFRAME.scenes[0].camera.position.z = 20;
    window.AFRAME.scenes[0].camera.lookAt(0, 0, 0);
  };

  return <React.Fragment>
    <Button onClick={handleZoomIn} variant="contained">+</Button>
    <Button onClick={handleZoomReset} variant="contained">0</Button>
    <Button onClick={handleZoomOut} variant="contained">-</Button>
  </React.Fragment>;
};