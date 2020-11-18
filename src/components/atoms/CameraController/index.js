import React from 'react';
import { IconButton } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons/faSearchMinus';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus';

const zoomY = 1.5;
const zoomZ = 1.5;

export default () => {
  let sceneCamera = window.AFRAME.scenes[0].camera;

  const handleZoomOut = () => {
    sceneCamera.position.y = sceneCamera.position.y + zoomY;
    sceneCamera.position.z = sceneCamera.position.z + zoomZ;
    sceneCamera.lookAt(0, 0, 0);
  };

  const handleZoomIn = () => {
    sceneCamera.position.y = Math.max(sceneCamera.position.y - zoomY, 0);
    sceneCamera.position.z = sceneCamera.position.z - zoomZ;
    sceneCamera.lookAt(0, 0, 0);
  };

  // const handleZoomReset = () => {
  //   sceneCamera.position.x = 0;
  //   sceneCamera.position.y = 10;
  //   sceneCamera.position.z = 20;
  //   sceneCamera.lookAt(0, 0, 0);
  // };

  return <React.Fragment>
    {/* <Button onClick={handleZoomReset} variant="contained">0</Button> */}
    <IconButton onClick={handleZoomIn} title='Zoom in'>
      <FontAwesomeIcon icon={faSearchPlus} size="sm" />
    </IconButton>

    <IconButton onClick={handleZoomOut} title='Zoom out'>
      <FontAwesomeIcon icon={faSearchMinus} size="sm" />
    </IconButton>
  </React.Fragment>;
};