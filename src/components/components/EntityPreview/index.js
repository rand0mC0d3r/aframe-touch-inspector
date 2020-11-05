import React from 'react';
import PropTypes from 'prop-types';
import ComponentsContainer from './../ComponentsContainer';
import ComponentIcon from './../../atoms/ComponentIcon';

import Events from '../../../lib/Events';
import { printEntity } from '../../../lib/entity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';

import { IconButton } from '@material-ui/core';
// import Chip from '@material-ui/core/Chip';
import Popover from '@material-ui/core/Popover';

import {
  Container,
  Wrapper,
  Chip,
  ContainerWrapper,
  EntityContainer
} from './styles.jsx';

export default ({ entity = {} }) => {
  const [ components, setComponents ] = React.useState([]);
  const [ geometryName, setGeometryName ] = React.useState('');
  const [ entityName, setEntityName ] = React.useState('');
  let type = 'id';

  const getGeometryName = () => {
    if(entity.components && Object.keys(entity.components).includes('geometry')) {
        setGeometryName(entity.components.geometry.data.primitive);
    }
  }

  const getEntityName = () => {
    let result = entity.id;
    if (!entity.isScene && !entityName && entity.getAttribute('class')) {
      result = entity.getAttribute('class').split(' ')[0];
    } else if (!entity.isScene && !entityName && entity.getAttribute('mixin')) {
      result = entity.getAttribute('mixin').split(' ')[0];
    }
    setEntityName(result);
  }

  React.useEffect(() => {
    let list = [];
    if(entity && entity.components) {
      Object.keys(entity.components).map(component => {
        if(!list[component]) {
          list.push({
            value: component,
            occurence: 1,
          })
        } else {
          list = [...list, list.filter(l => l.value === component).map(l => l.occurence++)];
        }
      })
      setComponents(list);
      getGeometryName();
      getEntityName();
    }
  }, [entity])

  return (
  <span className="entityPrint">
      {entity && <React.Fragment>
        <span className="entityTagName">
          {entity.tagName.toLowerCase()}
        </span>
        {entityName && (
          <span className="entityName" data-entity-name-type={type}>
            &nbsp;{entityName}
          </span>
        )}

        {/* {geometryName()} */}

        {components.map(component => <Chip key={component.value}>
            <ComponentIcon componentName={component.value} />
            {component.occurence > 1 ? `${component.occurence} times` : ''}
          </Chip>)}
        {/* <span className="entityCloseTag">{'>'}</span> */}
      </React.Fragment>}

    </span>

  );
}
