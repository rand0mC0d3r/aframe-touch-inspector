import React from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons/faSearchMinus';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus';

const zoomY = 1.5;
const zoomZ = 1.5;
const minLimit = 4.20;

export default () => {
  let sceneCamera = window.AFRAME.scenes[0].camera;

  const lookAtDefault = () => {
    sceneCamera.lookAt(0, 1.6, -1);
  };

  const handleZoomOut = () => {
    sceneCamera.position.y = sceneCamera.position.y + zoomY;
    sceneCamera.position.z = sceneCamera.position.z + zoomZ;
    lookAtDefault();
  };

  const handleZoomIn = () => {
    sceneCamera.position.y = Math.max(sceneCamera.position.y - zoomY, minLimit);
    sceneCamera.position.z = Math.max(sceneCamera.position.z - zoomZ, minLimit);
    lookAtDefault();
  };

  const handleZoomReset = () => {
    sceneCamera.position.x = 0;
    sceneCamera.position.y = 10;
    sceneCamera.position.z = 20;
    lookAtDefault();
  };

  const items = [
    {
      f: handleZoomIn,
      title: 'Zoom in',
      icon: faSearchPlus,
    },
    {
      f: handleZoomReset,
      title: 'Zoom reset',
      icon: faSearch,
    },
    {
      f: handleZoomOut,
      title: 'Zoom out',
      icon: faSearchMinus,
    }
  ];

  return <React.Fragment>
    {items.map((item, i) => <IconButton key={i} onClick={item.f} title={item.title}>
      <FontAwesomeIcon icon={item.icon} size="sm"  title={item.title} />
    </IconButton>)}
  </React.Fragment>;
};