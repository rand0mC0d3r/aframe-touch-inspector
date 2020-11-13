import React from 'react';

import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faChartArea } from '@fortawesome/free-solid-svg-icons/faChartArea';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons/faDrawPolygon';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faGhost } from '@fortawesome/free-solid-svg-icons/faGhost';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons/faKeyboard';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons/faPaintRoller';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { faSmog } from '@fortawesome/free-solid-svg-icons/faSmog';
import { faBlind } from '@fortawesome/free-solid-svg-icons/faBlind';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons/faVrCardboard';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons/faBinoculars';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const items = {
  'geometry': faDrawPolygon,
  'material': faPaintRoller,
  'light': faLightbulb,
  'animation': faRoute,
  'camera': faCamera,
  'gltf-model': faPuzzlePiece,
  'fog': faSmog,
  'position': faArrowsAlt,
  'scale': faExpand,
  'rotation': faRedo,
  'visible': faEye,
  'shadow': faGhost,
  'debug': faBug,
  'screenshot': faCamera,
  'inspector': faUserSecret,
  'vr-mode-ui': faVrCardboard,
  'stats': faChartArea,
  'keyboard-shortcuts': faKeyboard,
  'device-orientation-permission-ui': faMobileAlt,
  'laser-controls': faBlind,
  'background': faMountain,
  'wasd-controls': faKeyboard,
  'look-controls': faBinoculars,
};

export default ({
  componentName,
  size = "sm",
  returnNull = false
}) => <React.Fragment>
  {items[componentName] ?
  <FontAwesomeIcon title={componentName} size={size} fixedWidth icon={items[componentName]}/> :
  (<React.Fragment>
    {!returnNull && <div title={componentName}>{componentName.substr(0,1).toUpperCase()}</div>}
  </React.Fragment>)}
</React.Fragment>;
