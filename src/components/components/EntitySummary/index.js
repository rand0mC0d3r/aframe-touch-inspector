import React from 'react';

import {
  EntityMetaContainer,
  EntityTagLabel,
  EntityNameLabel,
} from './styles.jsx';

export default ({
  entity = {},
  onDoubleClick = () => {},
}) => {
  const [ components, setComponents ] = React.useState([]);
  const [ geometryName, setGeometryName ] = React.useState('');
  const [ entityName, setEntityName ] = React.useState('');

  const getGeometryName = () => {
    if(entity.components && Object.keys(entity.components).includes('geometry')) {
      setGeometryName(entity.components.geometry.data.primitive);
    }
  };

  const getEntityName = () => {
    let result = entity.id;
    if (!entity.isScene && !entityName && entity.getAttribute('class')) {
      result = entity.getAttribute('class').split(' ')[0];
    } else if (!entity.isScene && !entityName && entity.getAttribute('mixin')) {
      result = entity.getAttribute('mixin').split(' ')[0];
    }
    setEntityName(result);
  };

  React.useEffect(() => {
    let list = [];
    if(entity && entity.components) {
      Object.keys(entity.components).map(component => {
        if(!list[component]) {
          list.push({
            value: component,
            occurence: 1,
          });
        } else {
          list = [ ...list, list.filter(l => l.value === component)
            .map(l => l.occurence++) ];
        }
      });
      setComponents(list);
      getGeometryName();
      getEntityName();
    }
  }, [ entity ]);

  return <React.Fragment>
    {entity && <EntityMetaContainer {...{onDoubleClick}}>
      <EntityTagLabel>{entity.tagName.toLowerCase()}</EntityTagLabel>
      {entityName && <EntityNameLabel>#{entityName}</EntityNameLabel>}
    </EntityMetaContainer>}
  </React.Fragment>;
};
