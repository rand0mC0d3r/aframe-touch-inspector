import React from 'react';
import TransformToolbar from './TransformToolbar';
import AddEntity from './../atoms/AddEntity';
import Sidebar from '../components/Sidebar';

import {
    Container,
    ToolsBar,
    ViewportBar
 } from './styles.jsx';

THREE.ImageUtils.crossOrigin = '';

export default ({
    entity = {},
    visible = false,
}) => <Container>
    <ToolsBar>
        <TransformToolbar />
    </ToolsBar>
    <ViewportBar>
        <AddEntity />
        <Sidebar
            entity={entity}
            visible={visible}
        />

    </ViewportBar>
</Container>;