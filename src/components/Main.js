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
    Events.on('togglesidebar', event => {
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
    });

    Events.on('entityselect', entity => {
      setEntity(entity);
    });

    Events.on('entitydeselect', () => {
      setEntity(null);
    });

    Events.on('inspectortoggle', enabled => {
      setInspectorEnabled(enabled);
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener('message', (event) => {
      if(event.data.type === 'borderColor') {
        setAccent(event.data.value);
      }
    }, false);
  }, []);

  return <React.Fragment>
    {inspectorEnabled && <InspectorContainer>
      <CameraManager />
      <PanelManager {...{scene: AFRAME.scenes[0], accent, entity, visibleScenegraph, visibleAttributes}} />
      <Viewport {...{entity, accent }} />
    </InspectorContainer>}
  </React.Fragment>;
};
