import React from 'react';
import Scenegraph from './../Scenegraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import PanelHeader from '../atoms/PanelHeader';
import EditPanel from '../components/EditPanel';
import ToggleInspectorButton from '../atoms/ToggleInspectorButton';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';

import {
  TabIcon,
  TabItem,
  TabsContainer,
  PanelBar,
  PanelWrapper,
  ResizeContainer,
  MenuContainer,
  WhiteLayer,
  ResizeWrapper,
  TabsListWrapper,
  TabListItem,
} from './styles.jsx';

export default ({
  scene = {},
  entity = {},
  visibleScenegraph = false,
  visibleAttributes = false
}) => {
  const noPanelIndex = false;
  const [ value, setValue ] = React.useState(noPanelIndex);

  const panels = [
    {
      title: 'Layers',
      icon: faLayerGroup,
      component: <Scenegraph {...{scene, entity, visibleScenegraph}}/>,
    },
    {
      title: 'Settings',
      icon: faSlidersH,
      component: <EditPanel {...{entity, visibleAttributes}} />,
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(value === newValue ? false : newValue);
  };

  return <PanelWrapper>
    {value !== false ? (
      <React.Fragment>
        <ResizeWrapper>
          <ResizeContainer>
              <TabsListWrapper>
                {panels
                  .filter((panel, i) => i === value)
                  .map((panel, i) => <React.Fragment key={i}>
                    <WhiteLayer />
                    <TabListItem
                      key={i}
                      role="tabpanel"
                      id={`vertical-tabpanel-${i}`}
                    >
                      <PanelHeader
                        icon={panel.icon}
                        title={panel.title}/>
                      {panel.component}
                    </TabListItem>
                  </React.Fragment>)}
              </TabsListWrapper>
          </ResizeContainer>
        </ResizeWrapper>
      </React.Fragment>
    ) : null}
    <PanelBar>
      <TabsContainer
        orientation="vertical"
        variant="scrollable"
        value={value}
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
        onChange={handleChange}
      >
        {panels.map((panel) => <TabItem
          key={panel.title}
          title={panel.title}
          icon={<TabIcon size="1x" icon={panel.icon}/>}
        />)}
      </TabsContainer>
       <MenuContainer>
        <ToggleInspectorButton />
      </MenuContainer>
    </PanelBar>
  </PanelWrapper>;
};