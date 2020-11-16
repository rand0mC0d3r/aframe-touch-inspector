import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons/faExpandArrowsAlt';
import { IconButton } from '@material-ui/core';

export default () => {
  const [ fullScreen, setFullScreen ] = React.useState(false);

  const toggleFullScreen = () => {
    if(fullScreen) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
    setFullScreen(!fullScreen);
  };

  return <IconButton onClick={toggleFullScreen} title="Toggle full-screen" >
    <FontAwesomeIcon icon={faExpandArrowsAlt} size="sm" />
  </IconButton>;
};