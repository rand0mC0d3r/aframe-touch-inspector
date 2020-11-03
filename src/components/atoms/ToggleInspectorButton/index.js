import React from 'react';
import Events from '../../../lib/Events';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube';
import { IconButton } from '@material-ui/core';

export default () => {
  return <IconButton title="Toggle Inspector / Editor" >
      <FontAwesomeIcon icon={faCube} size="sm" />
   </IconButton>;
};
