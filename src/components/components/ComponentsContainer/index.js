import React from 'react';
import AddComponent from '../AddComponent';
import Component from '../Component';
import CommonComponents from '../CommonComponents';
import DEFAULT_COMPONENTS from '../DefaultComponents';
import ComponentIcon from './../../atoms/ComponentIcon';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';

import {
  TabIcon,
  TabItem,
  TabsContainer,
  PanelWrapper,
  ResizeContainer,
  TabsBar,
  ResizeWrapper,
} from './styles.jsx';

export default ({ entity = {} }) => {
  const noPanelIndex = 0;
  const [ value, setValue ] = React.useState(noPanelIndex);
  const components = entity ? entity.components : {};
  const definedComponents = Object.keys(components).filter(key => DEFAULT_COMPONENTS.indexOf(key) === -1);

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
};