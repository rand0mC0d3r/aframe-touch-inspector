import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faRedo, faExpand } from '@fortawesome/free-solid-svg-icons';

const Events = require('../../lib/Events.js');
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
    {transformButtons.map((option, i) => <FontAwesomeIcon
      icon={option.icon}
      key={i}
      size="lg"
      onClick={() => changeTransformMode(option.value)}
      title={option.value}
      active={option.value === selectedTransform ? true : false}
   />)}
  </div>;
};
