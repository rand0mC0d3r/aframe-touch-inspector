import React from 'react';
import TransformToolbar from './TransformToolbar';
import ViewportHUD from './ViewportHUD';

import {
    DetectionContainer,
    ToolsBar,
    ViewportBar
 } from './styles.jsx';

THREE.ImageUtils.crossOrigin = '';

export default () => {
  return <DetectionContainer>
        <ToolsBar>
        test
        </ToolsBar>
        <ViewportBar>
            <ViewportHUD />
            <TransformToolbar />
        </ViewportBar>
    </DetectionContainer>;
}