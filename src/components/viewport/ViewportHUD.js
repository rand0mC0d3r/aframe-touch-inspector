import React from 'react';
import Events from '../../lib/Events';
import { printEntity } from '../../lib/entity';

export default () => {
  const [ hoveredEntity, setHoveredEntity ] = React.useState(null);

  React.useEffect(() => {
    Events.on('raycastermouseenter', el => {
      setHoveredEntity(el);
    });

    Events.on('raycastermouseleave', el => {
      setHoveredEntity(el);
    });
  }, []);

  return <div id="viewportHud">
    <p>{printEntity(hoveredEntity)}</p>
  </div>;
};
