import React from 'react';

import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faTh } from '@fortawesome/free-solid-svg-icons/faTh';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons/faPlusSquare';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons/faMinusSquare';

import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';

import EntitySummary from './../../components/EntitySummary';
import Events from '../../../lib/Events';

import {
  Container,
  ExpandIcon,
  ChildrenLabel,
  VisibleIcon,
  ChildrenContainer,
  ChildrenIcon
} from './styles.jsx';

export default ({
  depth = 0,
  entity = {},
  isExpanded = false,
  accent,
  isFiltering = false,
  isSelected = false,
  selectEntity = () => {},
  toggleExpandedCollapsed = () => {},
}) => {
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

  return <Container active={isSelected} onClick={onClick} accent={accent}>
    <VisibleIcon
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

    {entity.children.length > 0 && !isFiltering && <React.Fragment>
      <ExpandIcon
        onClick={() => toggleExpandedCollapsed(entity)}
        icon={isExpanded ? faMinusSquare : faPlusSquare}
      />
      <ChildrenContainer title="Children count">
        <ChildrenIcon size="xs" icon={faTh} />
        <ChildrenLabel>{entity.children.length}</ChildrenLabel>
      </ChildrenContainer>
    </React.Fragment>}
    <EntitySummary {...{entity, onDoubleClick}} />
  </Container>;
};
