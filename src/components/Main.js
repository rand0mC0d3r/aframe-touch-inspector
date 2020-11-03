import React from 'react';
import TransformToolbar from './viewport/TransformToolbar';
import Viewport from './viewport';
import Events from '../lib/Events';
import SceneGraph from './Scenegraph';
import ComponentsSidebar from './components/Sidebar';
import PanelManger from './PanelManager';

import {
  DetectionContainer,
  InspectorContainer
 } from './styles.jsx';

THREE.ImageUtils.crossOrigin = '';

export default () => {
  const [ entity, setEntity ] = React.useState(null);
  const [ scene, setScene ] = React.useState(AFRAME.scenes[0]);
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
          setVisibleAttributes(true)
          setVisibleScenegraph(true);
        }
      } else if (event.which === 'attributes') {
        setVisibleAttributes(!visibleAttributes)
      } else if (event.which === 'scenegraph') {
        setVisibleScenegraph(!visibleScenegraph);
      }

      this.forceUpdate();
    });

    Events.on('entityselect', entity => {
      setEntity(entity);
    });

    Events.on('inspectortoggle', enabled => {
      console.log('inspectortoggle', enabled)
      setInspectorEnabled(enabled);
    });
  }, []);

  return <React.Fragment>
    {inspectorEnabled && <InspectorContainer>
      <PanelManger
        {...{scene, entity, visibleScenegraph, visibleAttributes}}
      />
      {/* <SceneGraph
        scene={sceneEl}
        selectedEntity={entity}
        visible={visibleScenegraph}/> */}
      <Viewport
        entity={entity}
        visible={visibleAttributes}
      />
    </InspectorContainer>}
  </React.Fragment>;
}
