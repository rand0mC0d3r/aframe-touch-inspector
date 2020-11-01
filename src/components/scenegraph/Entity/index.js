import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { printEntity, removeEntity, cloneEntity } from '../../../lib/entity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons/faClone';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';

import Events from '../../../lib/Events';

import { Container } from './styles.jsx';

export default ({
    depth = 0,
    entity = {},
    isExpanded = false,
    isFiltering = false,
    isSelected = false,
    selectEntity = () => {},
    toggleExpandedCollapsed = () => {},
}) => {
    const [ state, setState ] = React.useState({});
    const onClick = () => selectEntity(entity);
    const onDoubleClick = () => Events.emit('objectfocus', entity.object3D);
    const toggleVisibility = () => {
      const visible =
        entity.tagName.toLowerCase() === 'a-scene'
          ? entity.object3D.visible
          : entity.getAttribute('visible');
      entity.setAttribute('visible', !visible);
    };
    const tagName = entity.tagName.toLowerCase();
    const pad = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(depth);
    let collapse;

    if (entity.children.length > 0 && !isFiltering) {
      collapse = (
        <span
          onClick={() => toggleExpandedCollapsed(entity)}
          className={`collapsespace fa ${
            isExpanded ? 'fa-caret-down' : 'fa-caret-right'
          }`}
        />
      );
    } else {
      collapse = <span className="collapsespace" />;
    }
    // Class name.
    const className = classnames({
      active: isSelected,
      entity: true,
      // novisible: !visible,
      option: true
    });

    return (
      <Container active={isSelected} className={className} onClick={onClick}>
        <span>

      <FontAwesomeIcon
        title="Toggle entity visibility"
        onClick={toggleVisibility}
            icon={(tagName === 'a-scene' ?
              entity.object3D.visible :
              entity.getAttribute('visible')) ?
                faEye :
                faEyeSlash}
        />



          <span
            className="entityChildPadding"
            dangerouslySetInnerHTML={{ __html: pad }}
          />
          {collapse}
          {printEntity(entity, onDoubleClick)}
        </span>
        <span className="entityActions">

          {isSelected && <React.Fragment>
            {tagName !== 'a-scene' && <FontAwesomeIcon
              onClick={() => cloneEntity(entity)}
              icon={faClone}
            />}

            {tagName !== 'a-scene' &&  <FontAwesomeIcon
              onClick={event => {
                  event.stopPropagation();
                  removeEntity(entity);
              }}
              title="Remove entity"
              icon={faTrash}
            />}
          </React.Fragment>}
        </span>
      </Container>
    );
}
