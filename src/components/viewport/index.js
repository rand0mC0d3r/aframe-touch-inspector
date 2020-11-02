import React from 'react';
import TransformToolbar from './TransformToolbar';
import ViewportHUD from './ViewportHUD';
import Sidebar from '../components/Sidebar';

import {
    DetectionContainer,
    ToolsBar,
    ViewportBar
 } from './styles.jsx';

THREE.ImageUtils.crossOrigin = '';

export default ({
    entity = {},
    visible = false,
}) => <DetectionContainer>
    <ViewportBar>
        <ViewportHUD />
        <Sidebar
            entity={entity}
            visible={visible}
        />
        <TransformToolbar />
    </ViewportBar>
</DetectionContainer>;