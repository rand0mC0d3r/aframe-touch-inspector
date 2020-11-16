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
  EmptyContainer,
  ContainerWrapper,
  EntityContainer
} from './styles.jsx';

export default ({ entity = null }) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const [ visible, setVisible ] = React.useState(true);
  const [ hoveredEntity, setHoveredEntity ] = React.useState(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setVisible(!!entity);
  }, [entity])

  return <Wrapper>
    {entity ? <React.Fragment>
      {visible && <ContainerWrapper>
          <ComponentsContainer entity={entity} />
      </ContainerWrapper>}
    </React.Fragment> : <EmptyContainer>
      No Entity. Please select something from the scene.
    </EmptyContainer>}
  </Wrapper>;
}
