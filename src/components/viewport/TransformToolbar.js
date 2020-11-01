import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { IconButton } from '@material-ui/core';
import Events from '../../lib/Events';

const transformButtons = [
  { value: 'translate', icon: faArrowsAlt },
  { value: 'rotate', icon: faRedo },
  { value: 'scale', icon: faExpand }
];

export default () => {
  const [ selectedTransform, setSelectedTransform ] = React.useState('translate');
  const [ localSpace, setLocalSpace ] = React.useState(false);

  React.useEffect(() => {
    Events.on('transformmodechange', mode => {
      setSelectedTransform(mode);
    });

    Events.on('transformspacechange', () => {
      Events.emit('transformspacechanged', localSpace ? 'world' : 'local');
      setLocalSpace(!localSpace);
    });
  }, []);

  const changeTransformMode = mode => {
    setSelectedTransform(mode);
    Events.emit('transformmodechange', mode);
  };

  return <div id="transformToolbar" className="toolbarButtons">
    {transformButtons.map((option, i) => <IconButton
      key={i}
      onClick={() => changeTransformMode(option.value)}
      title={`Toggle ${option.value}`}
    >
      <FontAwesomeIcon
        icon={option.icon}
        size="sm"
        fixedWidth
        // active={option.value === selectedTransform ? true : false}
    />
   </IconButton>)}
  </div>;
};
