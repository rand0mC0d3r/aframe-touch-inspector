import React from 'react';
import TransformToolbar from './viewport/TransformToolbar';
import Viewport from './viewport';
import Events from '../lib/Events';
import SceneGraph from './Scenegraph';
import ComponentsSidebar from './components/Sidebar';
import PanelManager from './PanelManager';

import borderColor from '../utils/borderColor';
import {
  DetectionContainer,
  InspectorContainer
 } from './styles.jsx';

THREE.ImageUtils.crossOrigin = '';

const useReactPath = () => {
  const [path, setPath] = React.useState(window.location.pathname);
  const listenToPopstate = () => {
    const winPath = window.location.pathname;
    setPath(winPath);
  };
  React.useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return path;
};

export default () => {
  const [ entity, setEntity ] = React.useState(null);
  const [ accent, setAccent ] = React.useState(null);
  const [ scene, setScene ] = React.useState(AFRAME.scenes[0]);
  const [ inspectorEnabled, setInspectorEnabled ] = React.useState(true);
  const [ visibleScenegraph, setVisibleScenegraph ] = React.useState(true);
  const [ visibleAttributes, setVisibleAttributes ] = React.useState(true);
  const path = useReactPath();

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

    Events.on('entitydeselect', entity => {
      setEntity(null);
    });

    Events.on('inspectortoggle', enabled => {
      console.log('inspectortoggle', enabled)
      setInspectorEnabled(enabled);
    });
  }, []);

  return <React.Fragment>
    {inspectorEnabled && <InspectorContainer>
      <PanelManager {...{scene, accent, entity, visibleScenegraph, visibleAttributes}} />
      <Viewport {...{entity, accent }} />
    </InspectorContainer>}
  </React.Fragment>;
}
