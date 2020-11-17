import React from 'react';
import Events from '../../../lib/Events';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { IconButton } from '@material-ui/core';

export default () => {
  const addEntity = () => {
    Events.emit('entitycreate', { element: 'a-entity', components: {id: `entity-${Math.random().toString(36).substr(2, 5)}`} });
  };

  return <IconButton onClick={addEntity} title={'Add new Entity'} >
    <FontAwesomeIcon icon={faPlus} size="sm" />
  </IconButton>;
};