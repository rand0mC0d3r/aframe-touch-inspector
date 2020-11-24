import React from 'react';

import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faChartArea } from '@fortawesome/free-solid-svg-icons/faChartArea';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons/faDrawPolygon';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faGhost } from '@fortawesome/free-solid-svg-icons/faGhost';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons/faKeyboard';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons/faPaintRoller';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faSmog } from '@fortawesome/free-solid-svg-icons/faSmog';
import { faBlind } from '@fortawesome/free-solid-svg-icons/faBlind';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons/faUserSecret';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons/faVrCardboard';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons/faBinoculars';
import { faMountain } from '@fortawesome/free-solid-svg-icons/faMountain';
import { faFont } from '@fortawesome/free-solid-svg-icons/faFont';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons/faMousePointer';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons/faHandPointer';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons/faWindowMaximize';

import { EntityIcon } from './styles.jsx';

const items = {
  'geometry': faDrawPolygon,
  'embedded': faWindowMaximize,
  'material': faPaintRoller,
  'light': faLightbulb,
  'animation': faRoute,
  'camera': faCamera,
  'gltf-model': faPuzzlePiece,
  'fog': faSmog,
  'position': faArrowsAlt,
  'link': faLink,
  'sound': faMusic,
  'scale': faExpand,
  'hand-controls': faHandPointer,
  'rotation': faRedo,
  'visible': faEye,
  'cursor': faMousePointer,
  'shadow': faGhost,
  'debug': faBug,
  'screenshot': faCamera,
  'inspector': faUserSecret,
  'vr-mode-ui': faVrCardboard,
  'text': faFont,
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
  size = 'sm',
  returnNull = false
}) => <React.Fragment>
  {items[componentName] ?
    <EntityIcon
      title={componentName}
      size={size}
      fixedWidth
      icon={items[componentName]}/> :
    (<React.Fragment>
      {!returnNull && <div title={componentName}>{componentName.substr(0,1).toUpperCase()}</div>}
    </React.Fragment>)}
</React.Fragment>;
