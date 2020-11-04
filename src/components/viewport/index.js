import React from 'react';
import TransformToolbar from './TransformToolbar';
import AddEntity from './../atoms/AddEntity';
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
        <TransformToolbar />
        <AddEntity />
        <Sidebar
            entity={entity}
            visible={visible}
        />

    </ViewportBar>
</DetectionContainer>;