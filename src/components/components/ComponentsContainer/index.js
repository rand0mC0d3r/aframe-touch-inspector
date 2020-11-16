import React from 'react';
import AddComponent from '../AddComponent';
import Component from '../Component';
import CommonComponents from '../CommonComponents';
import DEFAULT_COMPONENTS from '../DefaultComponents';
import ComponentIcon from './../../atoms/ComponentIcon';

import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { faPaintRoller } from '@fortawesome/free-solid-svg-icons/faPaintRoller';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons/faDrawPolygon';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faSmog } from '@fortawesome/free-solid-svg-icons/faSmog';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
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
  TabsBar,
  WhiteLayer,
  ResizeWrapper,
  TabsListWrapper,
  TabListItem
} from './styles.jsx';

export default ({ entity = {} }) => {
  const noPanelIndex = 0;
  const [ value, setValue ] = React.useState(noPanelIndex);
  const components = entity ? entity.components : {};
  const definedComponents = Object.keys(components).filter(key => DEFAULT_COMPONENTS.indexOf(key) === -1);

  const refresh = () => {
    console.log('refresh')
    this.forceUpdate();
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <PanelWrapper>
    <TabsBar>
      <AddComponent entity={entity} />

      {definedComponents.length > 0 &&
        <TabsContainer
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
        >
          <TabItem
            key="common"
            title='Common Properties'
            icon={<TabIcon size="sm" icon={faInfoCircle}/>}
          />
          {definedComponents.sort().map(key => <TabItem
            key={key}
            title={`Configure ${key.toUpperCase()}`}
            icon={<ComponentIcon componentName={key}/>}
          />)}
        </TabsContainer>
      }
    </TabsBar>
    {value !== false ? <React.Fragment>
      <ResizeWrapper>
        <ResizeContainer>
          {value === 0 && <CommonComponents entity={entity} />}
          {definedComponents
            .filter((key, i) => i + 1 === value)
            .map((key, i) =>  <Component
              isCollapsed={definedComponents.length > 2}
              component={components[key]}
              entity={entity}
              key={`${key}_${i}`}
              name={key}
          />)}
        </ResizeContainer>
      </ResizeWrapper>
    </React.Fragment> : null}
  </PanelWrapper>;
}