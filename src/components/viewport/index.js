import React from 'react';
import TransformToolbar from './TransformToolbar';
import ViewportHUD from './ViewportHUD';
import ComponentsSidebar from '../components/Sidebar';

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
        <ComponentsSidebar
            entity={entity}
            visible={visible}
        />
        <ViewportHUD />
        <TransformToolbar />
    </ViewportBar>
</DetectionContainer>;
}