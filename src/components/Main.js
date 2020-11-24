import React from 'react';
import Viewport from './viewport';
import Events from '../lib/Events';
import PanelManager from './PanelManager';
import CameraManager from './CameraManager';

import {
  InspectorContainer
} from './styles.jsx';

THREE.ImageUtils.crossOrigin = '';

export default () => {
  const [ entity, setEntity ] = React.useState(null);
  const [ accent, setAccent ] = React.useState(null);
  const [ inspectorEnabled, setInspectorEnabled ] = React.useState(true);
  const [ visibleScenegraph, setVisibleScenegraph ] = React.useState(true);
  const [ visibleAttributes, setVisibleAttributes ] = React.useState(true);

  React.useEffect(() => {
    Events.on('togglesidebar', handleToggleSidebar);
    Events.on('entityselect', handleEntitySelect);
    Events.on('entitydeselect', handleEntityDeselect);
    Events.on('inspectortoggle', handleInspectorToggle);

    return () => {
      Events.removeListener('togglesidebar', handleToggleSidebar);
      Events.removeListener('entityselect', handleEntitySelect);
      Events.removeListener('entitydeselect', handleEntityDeselect);
      Events.removeListener('inspectortoggle', handleInspectorToggle);
    };
  }, []);

  const handleInspectorToggle = enabled => {
    setInspectorEnabled(enabled);
  };

  const handleToggleSidebar = event => {
    if (event.which === 'all') {
      if (this.state.visible.scenegraph || this.state.visible.attributes) {
        setVisibleAttributes(false);
        setVisibleScenegraph(false);
      } else {
        setVisibleAttributes(true);
        setVisibleScenegraph(true);
      }
    } else if (event.which === 'attributes') {
      setVisibleAttributes(!visibleAttributes);
    } else if (event.which === 'scenegraph') {
      setVisibleScenegraph(!visibleScenegraph);
    }

    this.forceUpdate();
  };

  const handleEntitySelect = (entity) => {
    setEntity(entity);
  };

  const handleEntityDeselect = () => {
    setEntity(null);
  };

  React.useEffect(() => {
    window.addEventListener('message', handleColorAccent, false);

    return () => {
      window.removeEventListener('message', handleColorAccent);
    };
  }, []);

  const handleColorAccent = event => {
    if(event.data.type === 'borderColor') {
      setAccent(event.data.value);
    }
  };

  return <React.Fragment>
    {inspectorEnabled && <InspectorContainer>
      <CameraManager />
      <PanelManager {...{scene: AFRAME.scenes[0], accent, entity, visibleScenegraph, visibleAttributes}} />
      <Viewport {...{entity, accent }} />
    </InspectorContainer>}
  </React.Fragment>;
};
