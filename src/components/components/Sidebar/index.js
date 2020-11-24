import React from 'react';
import EntityPreview from './../EntityPreview';
import Events from '../../../lib/Events';

import {
  Wrapper,
} from './styles.jsx';

export default ({
  entity = {},
}) => {
  const [ hoveredEntity, setHoveredEntity ] = React.useState(null);

  React.useEffect(() => {
    Events.on('raycastermouseenter', handleRayCasterMouseEnter);
    Events.on('raycastermouseleave', handleRaycasterMouseLeave);

    return () => {
      Events.removeListener('raycastermouseenter', handleRayCasterMouseEnter);
      Events.removeListener('raycastermouseleave', handleRaycasterMouseLeave);
    };
  }, []);

  const handleRayCasterMouseEnter = el => {
    setHoveredEntity(el);
  };

  const handleRaycasterMouseLeave = el => {
    setHoveredEntity(el);
  };

  return <Wrapper>
    <EntityPreview entity={entity ? entity : hoveredEntity} />
  </Wrapper>;
};