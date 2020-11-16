import React from 'react';
import PropTypes from 'prop-types';
import { InputWidget } from '../../widgets';
import DEFAULT_COMPONENTS from './../DefaultComponents';
import PropertyRow from './../PropertyRow';
import Collapsible from '../../Collapsible';
import Mixins from './../Mixins';
import {
  updateEntity,
  getEntityClipboardRepresentation,
  printEntity
} from '../../../lib/entity';
import Events from '../../../lib/Events';
import Clipboard from 'clipboard';
import { saveBlob } from '../../../lib/utils';
import TextField from '@material-ui/core/TextField';

import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons/faArrowsAlt';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';

import { NameContainer } from './styles.jsx';

function changeId(componentName, value) {
  var entity = AFRAME.INSPECTOR.selectedEntity;
  if (entity.id !== value) {
    entity.id = value;
    Events.emit('entityidchange', entity);
  }
}

const items = [
  {
    name: "position",
    icon: faArrowsAlt,
  },
  {
    name: "rotation",
    icon: faRedo,
  },
  {
    name: "scale",
    icon: faExpand,
  },
  {
    name: "visible",
    icon: faEye,
  },
];

export default ({ entity = {} }) => {
   const renderCommonAttributes = () => {
    const components = entity ? entity.components : {};
    return items.map(item => {
      const schema = AFRAME.components[item.name].schema;
      let data = entity.object3D[item.name];
      if (item.name === 'rotation') {
        data = {
          x: THREE.Math.radToDeg(entity.object3D.rotation.x),
          y: THREE.Math.radToDeg(entity.object3D.rotation.y),
          z: THREE.Math.radToDeg(entity.object3D.rotation.z)
        };
      }
      return <PropertyRow
        onChange={updateEntity}
        key={item.name}
        name={item.name}
        icon={item.icon}
        showHelp={true}
        schema={schema}
        data={data}
        isSingle={true}
        componentname={item.name}
        entity={entity}
      />;
    });
  }

  return <Collapsible id="componentEntityHeader" className="commonComponents">
    <NameContainer>
      <InputWidget
        onChange={changeId}
        entity={entity}
        name="id"
        placeholder="Entity name..."
        fullWidth={true}
        value={entity.id}
      />
    </NameContainer>
    {renderCommonAttributes()}
  </Collapsible>;
}
