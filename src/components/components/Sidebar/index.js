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
    Events.on('raycastermouseenter', el => {
      setHoveredEntity(el);
    });

    Events.on('raycastermouseleave', el => {
      setHoveredEntity(el);
    });
  }, []);

  return <Wrapper>
    <EntityPreview entity={entity ? entity : hoveredEntity} />
  </Wrapper>;
};
