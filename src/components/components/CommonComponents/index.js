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

import { NameContainer } from './styles.jsx';

function changeId(componentName, value) {
  var entity = AFRAME.INSPECTOR.selectedEntity;
  if (entity.id !== value) {
    entity.id = value;
    Events.emit('entityidchange', entity);
  }
}

export default ({ entity = {} }) => {
  React.useEffect(() => {
    Events.on('entityupdate', detail => {
      if (detail.entity !== entity) {
        return;
      }
      if (DEFAULT_COMPONENTS.indexOf(detail.component) !== -1) {
        this.forceUpdate();
      }
    });

    Events.on('refreshsidebarobject3d', () => {
      this.forceUpdate();
    });
  }, [])

  const renderCommonAttributes = () => {
    const components = entity ? entity.components : {};
    return ['position', 'rotation', 'scale', 'visible'].map(componentName => {
      const schema = AFRAME.components[componentName].schema;
      let data = entity.object3D[componentName];
      if (componentName === 'rotation') {
        data = {
          x: THREE.Math.radToDeg(entity.object3D.rotation.x),
          y: THREE.Math.radToDeg(entity.object3D.rotation.y),
          z: THREE.Math.radToDeg(entity.object3D.rotation.z)
        };
      }
      return <PropertyRow
        onChange={updateEntity}
        key={componentName}
        name={componentName}
        showHelp={true}
        schema={schema}
        data={data}
        isSingle={true}
        componentname={componentName}
        entity={entity}
      />;
    });
  }

  // render() {
    // const entity = this.props.entity;
    // if (!entity) {
    //   return <div />;
    // }

  return <Collapsible id="componentEntityHeader" className="commonComponents">
    <div className="collapsible-header">
    </div>
    <div className="collapsible-content">
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
    </div>
  </Collapsible>;
  // }
}
