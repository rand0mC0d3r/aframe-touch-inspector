import React from 'react';

import CameraController from '../atoms/CameraController';

import {
  PanelBar,
  PanelWrapper,
  MenuContainer,
} from './styles.jsx';

export default ({
  accent,
}) => {

  return <PanelWrapper {...{accent}}>
    <PanelBar>
      <MenuContainer>
        <CameraController />
      </MenuContainer>
    </PanelBar>
  </PanelWrapper>;
};