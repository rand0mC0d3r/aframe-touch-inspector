import React from 'react';

const Events = require('../../lib/Events.js');
const classNames = require('classnames');
const transformButtons = [
  { value: 'translate', icon: 'fa-arrows-alt' },
  { value: 'rotate', icon: 'fa-repeat' },
  { value: 'scale', icon: 'fa-expand' }
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

  const renderTransformButtons = () => {
    return transformButtons.map((option, i) => {
        const classes = classNames({
          button: true,
          fa: true,
          [option.icon]: true,
          active: option.value === selectedTransform
        });

        return (
          <a
            title={option.value}
            key={i}
            onClick={() => changeTransformMode(option.value)}
            className={classes}
          />
        );
      }
    );
  };

  return <div id="transformToolbar" className="toolbarButtons">
    {renderTransformButtons()}
  </div>;
};
