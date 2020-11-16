import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';

import Scenegraph from './../Scenegraph';
import PanelHeader from '../atoms/PanelHeader';
import EditPanel from '../components/EditPanel';
import ExportGltfButton from '../atoms/ExportGltfButton';
import FullScreenButton from '../atoms/FullScreenButton';
import DeselectEntity from '../atoms/DeselectEntity';

import Events from '../../lib/Events.js';

import {
  TabIcon,
  TabItem,
  TabsContainer,
  PanelBar,
  UpperMenuContainer,
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
  accent,
  entity = {},
  visibleScenegraph = false,
  visibleAttributes = false
}) => {
  const noPanelIndex = 0;
  const [ value, setValue ] = React.useState(noPanelIndex);
  const [ transparency, setTransparency ] = React.useState(false);

  const panels = [
    {
      title: 'Layers',
      icon: faLayerGroup,
      component: <Scenegraph {...{scene, accent, entity, visibleScenegraph}}/>,
    },
    {
      title: 'Settings',
      icon: faSlidersH,
      component: <EditPanel {...{entity, visibleAttributes}} />,
    }
  ];

  const handleChange = (event, newValue) => {
    console.log('dddd')
    setValue(value === newValue ? false : newValue);
    if(newValue === 1) {
      setTransparency(false);
    }
  };

  const closePanels = () => {
    if(value === 1) {
      setValue(false);
    }
  };

  React.useEffect(() => {
    Events.on('objectfocus', object => {
      setValue(1);
    });

    Events.on('entityupdate', object => {
      setValue(1);
      setTransparency(true);
    });
  }, [])

  return <PanelWrapper {...{accent}}>
    {value !== false ? (
      <React.Fragment>
        <ResizeWrapper transparency={transparency ? '1' : '0'}>
          <ResizeContainer>
              <TabsListWrapper>
                {panels
                  .filter((panel, i) => i === value)
                  .map((panel, i) => <React.Fragment key={i}>
                    <WhiteLayer />
                    <TabListItem
                      transparency={transparency ? '1' : '0'}
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
    <PanelBar  onMouseEnter={() => setTransparency(false)}>
      <UpperMenuContainer>
        <DeselectEntity {...{entity, closePanels}} />
      </UpperMenuContainer>
      <TabsContainer
        orientation="vertical"
        variant="scrollable"
        value={value}
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
        onChange={handleChange}
      >
        {panels.map((panel) => <TabItem {...{accent}}
          key={panel.title}
          title={panel.title}
          icon={<TabIcon size="1x" icon={panel.icon}/>}
        />)}
      </TabsContainer>
       <MenuContainer>
         <ExportGltfButton />
         <FullScreenButton />
      </MenuContainer>
    </PanelBar>
  </PanelWrapper>;
};