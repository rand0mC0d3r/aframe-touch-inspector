import React from 'react';
import Events from '../../../lib/Events';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons/faMousePointer';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons/faHandPointer';
import { IconButton } from '@material-ui/core';

export default ({
  entity,
  closePanels = () => {}
}) => {
  const [ isSelected, setIsSelected ] = React.useState(false);

  const deselectEntity = () => {
    Events.emit('entitydeselect');
    closePanels();
    setIsSelected(false);
  };

  React.useEffect(() => {
    if(entity) {
      setIsSelected(true);
    }
  }, [entity]);

  return <IconButton
    disabled={!isSelected}
    onClick={deselectEntity} title={'Deselect Entity'}
  >
    <FontAwesomeIcon icon={isSelected ? faHandPointer : faMousePointer} size="sm" />
  </IconButton>;
};