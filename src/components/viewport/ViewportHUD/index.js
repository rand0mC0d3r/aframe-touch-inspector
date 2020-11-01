import React from 'react';
import Events from '../../../lib/Events';
import { printEntity } from '../../../lib/entity';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { IconButton } from '@material-ui/core';

import { Container } from './styles.jsx';

export default () => {
  const [ hoveredEntity, setHoveredEntity ] = React.useState(null);

  const addEntity = () => {
    Events.emit('entitycreate', { element: 'a-entity', components: {} });
  }

  React.useEffect(() => {
    Events.on('raycastermouseenter', el => {
      setHoveredEntity(el);
    });

    Events.on('raycastermouseleave', el => {
      setHoveredEntity(el);
    });
  }, []);

  return <Container>
    <IconButton onClick={addEntity} title={`Add new Entity`} >
      <FontAwesomeIcon icon={faPlus} size="sm" />
   </IconButton>
    <p>{printEntity(hoveredEntity)}</p>
  </Container>;
};
