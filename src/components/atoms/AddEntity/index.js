import React from 'react';
import Events from '../../../lib/Events';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { IconButton } from '@material-ui/core';

import { generate } from 'project-name-generator';

export default () => {
  const addEntity = () => {
    Events.emit('entitycreate', { element: 'a-entity', components: {id: generate({ words: 3 }).dashed} });
  };

  return <IconButton onClick={addEntity} title={'Add new Entity'} >
    <FontAwesomeIcon icon={faPlus} size="sm" />
  </IconButton>;
};