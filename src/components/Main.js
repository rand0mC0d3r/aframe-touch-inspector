import React from 'react';

THREE.ImageUtils.crossOrigin = '';

const Events = require('../lib/Events.js');
import TransformToolbar from './viewport/TransformToolbar';
import ViewportHUD from './viewport/ViewportHUD';

export default () => {
  const [ entity, setEntity ] = React.useState(null);
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
      setInspectorEnabled(enabled);
    });
  }, []);

  return <div id="inspectorContainer" className={inspectorEnabled ? '' : 'hidden'}>
    <div id="viewportBar">
      <ViewportHUD />
      <TransformToolbar />
    </div>
  </div>;
}
