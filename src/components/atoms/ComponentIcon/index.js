import React from 'react';

import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons/faPaintRoller';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons/faDrawPolygon';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faSmog } from '@fortawesome/free-solid-svg-icons/faSmog';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const items = {
  'geometry': faDrawPolygon,
  'material': faPaintRoller,
  'light': faLightbulb,
  'animation': faRoute,
  'camera': faCamera,
  'gltf-model': faPuzzlePiece,
  'fog': faSmog,
};

export default ({
  componentName,
  size = "sm",
  returnNull = false
}) => <React.Fragment>
  {items[componentName] ?
  <FontAwesomeIcon size={size} icon={items[componentName]}/> :
  (<React.Fragment>
    {!returnNull && <div>{componentName}</div>}
  </React.Fragment>)}
</React.Fragment>;
