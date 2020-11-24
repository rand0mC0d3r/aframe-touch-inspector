import React from 'react';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { IconButton } from '@material-ui/core';

import Events from '../../../lib/Events';

import { TransformationIcon, Container } from './styles.jsx';

const transformButtons = [
  { value: 'translate', icon: faArrowsAlt },
  { value: 'rotate', icon: faRedo },
  { value: 'scale', icon: faExpand }
];

export default ({ accent }) => {
  const [ selectedTransform, setSelectedTransform ] = React.useState('translate');
  const [ localSpace, setLocalSpace ] = React.useState(false);

  React.useEffect(() => {
    Events.on('transformmodechange', handleOnTransformModeChange);
    Events.on('transformspacechange', handleTransformSpaceChange);

    return () => {
      Events.removeListener('transformmodechange', handleOnTransformModeChange);
      Events.removeListener('transformspacechange', handleTransformSpaceChange);
    };
  }, []);

  const handleTransformSpaceChange = () => {
    Events.emit('transformspacechanged', localSpace ? 'world' : 'local');
    setLocalSpace(!localSpace);
  };

  const handleOnTransformModeChange = (mode) => {
    setSelectedTransform(mode);
  };

  const changeTransformMode = mode => {
    setSelectedTransform(mode);
    Events.emit('transformmodechange', mode);
  };

  return <Container>
    {transformButtons.map((option, i) => <IconButton
      key={i}
      color={option.value === selectedTransform ? 'primary' : 'default'}
      onClick={() => changeTransformMode(option.value)}
      title={`Toggle ${option.value}`}
    >
      <TransformationIcon
        icon={option.icon}
        active={option.value === selectedTransform ? 1 : 0}
        size="sm"
        accent={accent}
      />
    </IconButton>)}
  </Container>;
};
