import React from 'react';
import Events from '../../../lib/Events';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons/faMousePointer';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons/faHandPointer';
import { IconButton } from '@material-ui/core';

export default ({ entity }) => {
  const [ isSelected, setIsSelected ] = React.useState(false);

  const deselectEntity = () => {
    Events.emit('entitydeselect');
    setIsSelected(false);
  }

  React.useEffect(() => {
    if(entity) {
      setIsSelected(true);
    }
  }, [entity])

  return <IconButton
  disabled={!isSelected}
  onClick={deselectEntity} title={`Deselect Entity`}
  >
    {isSelected ?
      <FontAwesomeIcon icon={faHandPointer} size="sm" /> :
      <FontAwesomeIcon icon={faMousePointer} size="sm" />

    }
  </IconButton>;
};