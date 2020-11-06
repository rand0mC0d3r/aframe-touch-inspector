import React from 'react';
import PropTypes from 'prop-types';
import ComponentsContainer from './../ComponentsContainer';
import EntityPreview from './../EntityPreview';
import Events from '../../../lib/Events';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons/faSort';
import { IconButton } from '@material-ui/core';

import Popover from '@material-ui/core/Popover';

import {
  Container,
  Wrapper,
  ContainerWrapper,
  EntityContainer
} from './styles.jsx';

export default ({
    entity = {},
  }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [ hoveredEntity, setHoveredEntity ] = React.useState(null);

  React.useEffect(() => {
    Events.on('raycastermouseenter', el => {
      setHoveredEntity(el);
    });

    Events.on('raycastermouseleave', el => {
      setHoveredEntity(el);
    });
  }, [])


  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <Wrapper>
      {entity ?
        <EntityPreview entity={entity} /> :
        <EntityPreview entity={hoveredEntity} />}
  </Wrapper>;
}
