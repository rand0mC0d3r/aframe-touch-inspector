import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import { removeEntity, cloneEntity } from '../../lib/entity';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@material-ui/core';

import Emoji from './../atoms/Emoji';
import AddEntity from './../atoms/AddEntity';
import RenderPayload from './../atoms/RenderPayload';

import Entity from './Entity';
const Events = require('../../lib/Events.js');

import {
  Container,
  HeaderIcon,
  SearchField,
  EntitiesList,
  HeaderLabel,
  HeaderContainer,
  BottomBar,
  ActionBar,
  StartActionBar,
  EndActionBar,
  SearchContainer,
 } from './styles.jsx';


export default ({
    id = '',
    onChange = () => {},
    scene = {},
    entity = {},
    visibleScenegraph = false,
}) => {
  const [ index, setIndex ] = React.useState(-1);
  const [ selectedIndex, setSelectedIndex ] = React.useState(-1);

  const [ entities, setEntities ] = React.useState([]);
  const [ internalEntity, setInternalEntity ] = React.useState(entity);
  const [ expandedElements, setExpandedElements ] = React.useState([]);
  const [ filter, setFilter ] = React.useState('');
  const [ filteredEntities, setFilteredEntities ] = React.useState([]);

  React.useEffect(() => {
    rebuildEntityOptions();
    Events.on('entityidchange', rebuildEntityOptions);
    Events.on('entitycreated', rebuildEntityOptions);
    Events.on('entityclone', rebuildEntityOptions);

    setExpandedElements(new WeakMap([[scene, true]]))
  }, [])

  React.useEffect(() => {
    selectEntity(entity);
  }, [entity])

  const selectEntity = entity => {
    let found = false;
    for (let i = 0; i < filteredEntities.length; i++) {
      const entityOption = filteredEntities[i];
      if (entityOption.entity === entity) {
        setInternalEntity(entity);
        setSelectedIndex(i);
        // Make sure selected value is visible in scenegraph
        expandToRoot(entity);
        if (onChange) {
          onChange(entity);
        }
        Events.emit('entityselect', entity, true);
        found = true;
      }
    }

    if (!found) {
      setInternalEntity(null);
      setSelectedIndex(-1);
      // this.setState({ entity: null, selectedIndex: -1 });
    }
  };

  const rebuildEntityOptions = () => {
    let entities = [{ depth: 0, entity: scene }];

    function treeIterate(element, depth) {
      if (!element) { return; }
      depth += 1;

      for (let i = 0; i < element.children.length; i++) {
        let entity = element.children[i];

        if (entity.dataset.isInspector || !entity.isEntity ||
            entity.isInspector || 'aframeInspector' in entity.dataset) {
          continue;
        }

        entities.push({ entity: entity, depth: depth });

        treeIterate(entity, depth);
      }
    }
    treeIterate(scene, 0);

    setEntities(entities);
    setFilteredEntities(getFilteredEntities(filter, entities));
  };

  const selectIndex = index => {
    if (index >= 0 && index < entities.length) {
      selectEntity(entities[index].entity);
    }
  };

  const onFilterKeyUp = event => {
    if (event.keyCode === 27) {
      clearFilter();
    }
  };

  const onKeyDown = event => {
    switch (event.keyCode) {
      case 37: // left
      case 38: // up
      case 39: // right
      case 40: // down
        event.preventDefault();
        event.stopPropagation();
        break;
    }
  };

  const onKeyUp = event => {
    if (entity === null) { return; }

    switch (event.keyCode) {
      case 37: // left
        if (isExpanded(entity)) {
          toggleExpandedCollapsed(entity);
        }
        break;
      case 38: // up
        selectIndex(previousExpandedIndexTo(selectedIndex));
        break;
      case 39: // right
        if (!isExpanded(entity)) {
          toggleExpandedCollapsed(entity);
        }
        break;
      case 40: // down
        selectIndex(nextExpandedIndexTo(selectedIndex));
        break;
    }
  };

  const getFilteredEntities = (_filter, _entities) => {
    const currentEntities = _entities || entities;
    if (!_filter) {
      return currentEntities;
    }
    return currentEntities.filter(entityOption => {
      return filterEntity(entityOption.entity, _filter || filter);
    });
  }

  const isVisibleInSceneGraph = element => {
    let curr = element.parentNode;
    if (!curr) {
      return false;
    }
    while (curr !== undefined && curr.isEntity) {
      if (!isExpanded(curr)) {
        return false;
      }
      curr = curr.parentNode;
    }
    return true;
  };

  const isExpanded = element => expandedElements.get(element) === true;

  const toggleExpandedCollapsed = element => {
    setExpandedElements(expandedElements.set(element, !isExpanded(element)));
  };

  const expandToRoot = element => {
    let curr = element.parentNode;
    while (curr !== undefined && curr.isEntity) {
      expandedElements.set(curr, true);
      curr = curr.parentNode;
    }
    setExpandedElements(expandedElements);
  };

  const previousExpandedIndexTo = i => {
    for (let prevIter = i - 1; prevIter >= 0; prevIter--) {
      const prevEl = entities[prevIter].entity;
      if (isVisibleInSceneGraph(prevEl)) {
        return prevIter;
      }
    }
    return -1;
  };

  const nextExpandedIndexTo = i => {
    for (
      let nextIter = i + 1;
      nextIter < entities.length;
      nextIter++
    ) {
      const nextEl = entities[nextIter].entity;
      if (isVisibleInSceneGraph(nextEl)) {
        return nextIter;
      }
    }
    return -1;
  };

  const onChangeFilter = evt => {
    const filter = evt.target.value;
    setFilter(filter);
    updateFilteredEntities(filter);
  };

  const updateFilteredEntities = (filter) => {
    setFilteredEntities(getFilteredEntities(filter))
  }

  const clearFilter = () => {
    setFilter('')
    setFilteredEntities('');
  };

  const renderEntities = () => {
    return filteredEntities.map((entityOption, idx) => {
      if (
        !isVisibleInSceneGraph(entityOption.entity) &&
        !filter
      ) {
        return null;
      }
      return (
        <Entity
          {...entityOption}
          key={idx}
          isFiltering={!!filter}
          isExpanded={isExpanded(entityOption.entity)}
          isSelected={entity === entityOption.entity}
          selectEntity={selectEntity}
          toggleExpandedCollapsed={toggleExpandedCollapsed}
        />
      );
    });
  };

  return <Container>
    <SearchContainer>
      <SearchField
        fullWidth
        size="small"
        label="Search..."
        variant="outlined"
        id="filter"
        onChange={onChangeFilter}
        onKeyUp={onFilterKeyUp}
        value={filter}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Emoji symbol="🔍" label="Search" />
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
    <EntitiesList
      className="outliner"
      tabIndex="0"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      {renderEntities()}
    </EntitiesList>

    <ActionBar>
      <StartActionBar>
        {/* <AddEntity /> */}
        {entity && <React.Fragment>
        <IconButton
          onClick={() => cloneEntity(entity)}
          title="Clone Entity"
        >
          <FontAwesomeIcon size="xs" icon={faCopy}/>
        </IconButton>

        <IconButton
          onClick={event => {
                event.stopPropagation();
                removeEntity(entity);
          }}
          title="Remove entity"
        >
          <FontAwesomeIcon size="xs" icon={faTrashAlt} />
          </IconButton>
        </React.Fragment>}
      </StartActionBar>
      <EndActionBar>
        <IconButton
          onClick={rebuildEntityOptions}
          title="Rebuild Index"
        >
          <FontAwesomeIcon size="xs" icon={faRedo} />
        </IconButton>
      </EndActionBar>
    </ActionBar>
  </Container>;
  // }
}

const filterEntity = (entity, filter) => {
  if (!filter) {
    return true;
  }

  if (
    entity.id.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
    entity.tagName.toUpperCase().indexOf(filter.toUpperCase()) !== -1 ||
    entity.classList.contains(filter) ||
    entity.matches(filter)
  ) {
    return true;
  }

  return false;
}
