import React from 'react';
import TransformToolbar from './TransformToolbar';
import AddEntity from './../atoms/AddEntity';
import Sidebar from '../components/Sidebar';

import {
  Container,
  ToolsBar,
  SidebarWrapper,
  ViewportBar
} from './styles.jsx';

THREE.ImageUtils.crossOrigin = '';

export default ({ entity = {}, accent }) => <Container>
  <ToolsBar>
    <TransformToolbar {...{accent}} />
  </ToolsBar>
  <ViewportBar {...{accent}}>
    <AddEntity />
    <SidebarWrapper>
      <Sidebar {...{entity}}/>
    </SidebarWrapper>
  </ViewportBar>
</Container>;