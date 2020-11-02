import React from 'react';
import PropTypes from 'prop-types';
import ComponentsContainer from './../ComponentsContainer';
import Events from '../../../lib/Events';
import { printEntity } from '../../../lib/entity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { IconButton } from '@material-ui/core';

import Popover from '@material-ui/core/Popover';

import {
  Container,
  Wrapper,
  ContainerWrapper,
  EntityContainer
} from './styles.jsx';

export default ({ entity = {} }) => {

  let entityName = '';
  let type = 'id';


  const geometryName = () => {
    if(entity.components && Object.keys(entity.components).includes('geometry')) {
        return <span>{entity.components.geometry.data.primitive}</span>;
    }
  }

  // React.useEffect((entity) => {
  //   console.log('evaluate')
  //   if (!entity) {
  //     return;
  //   }

  //   entityName = entity.id;


  //   // Name.

  //   if (!entity.isScene && !entityName && entity.getAttribute('class')) {
  //     entityName = entity.getAttribute('class').split(' ')[0];
  //     type = 'class';
  //   } else if (!entity.isScene && !entityName && entity.getAttribute('mixin')) {
  //     entityName = entity.getAttribute('mixin').split(' ')[0];
  //     type = 'mixin';
  //   }

  // }, [])

  return (
  <span className="entityPrint">
      {entity && <React.Fragment>
        <span className="entityTagName">
          {'<' + entity.tagName.toLowerCase()}
        </span>
        {entityName && (
          <span className="entityName" data-entity-name-type={type}>
            &nbsp;{entityName}
          </span>
        )}

        {geometryName()}
        <span className="entityCloseTag">{'>'}</span>
      </React.Fragment>}

    </span>

  );
}
