import React from 'react';
import AddComponent from '../AddComponent';
import Component from '../Component';
import CommonComponents from '../CommonComponents';
import DEFAULT_COMPONENTS from '../DefaultComponents';

import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons/faPaintRoller';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons/faDrawPolygon';
import { faLightBulb } from '@fortawesome/free-solid-svg-icons/faLightBulb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import {
  Container,
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
  TabListItem
} from './styles.jsx';

export default ({ entity = {} }) => {
  const noPanelIndex = 1;
  const [ value, setValue ] = React.useState(noPanelIndex);
  const components = entity ? entity.components : {};
  const definedComponents = Object.keys(components).filter(key => DEFAULT_COMPONENTS.indexOf(key) === -1);

  const iconsMap = {
    'geometry': faDrawPolygon,
    'material': faPaintRoller,
    'light': faLightBulb,
  }

  const refresh = () => {
    console.log('refresh')
    this.forceUpdate();
  };


  const handleChange = (event, newValue) => {
    console.log('ffff')
    setValue(value === newValue ? false : newValue);
  };

  return <PanelWrapper>
    {/* <CommonComponents entity={entity} />
    <AddComponent entity={entity} />
    {definedComponents.sort().map((key) =>  <Component
      isCollapsed={definedComponents.length > 2}
      component={components[key]}
      entity={entity}
      key={key}
      name={key}
    />)} */}

    {definedComponents.length > 0 &&
     <TabsContainer
        value={value}
        variant="scrollable"
        scrollButtons="off"
        textColor="primary"
        indicatorColor="primary"
        onChange={handleChange}
      >
        {definedComponents.sort().map(key => <TabItem
          key={key}
          title={key}
          icon={<TabIcon size="sm" icon={iconsMap[key]}/>}
        />)}
      </TabsContainer>
    }


      {value !== false ? (
        <React.Fragment>
          <ResizeWrapper>
            <ResizeContainer>
              {definedComponents
                .filter((panel, i) => i === value)
                .map((key) =>  <Component
                  isCollapsed={definedComponents.length > 2}
                  component={components[key]}
                  entity={entity}
                  key={key}
                  name={key}
              />)}
               {value}
            </ResizeContainer>
          </ResizeWrapper>
        </React.Fragment>
      ) : null}

  </PanelWrapper>;
}
