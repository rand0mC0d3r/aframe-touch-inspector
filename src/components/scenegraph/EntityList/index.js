/* eslint-disable no-unused-vars, react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import Emoji from './../../components/atoms/Emoji';

import Entity from './../Entity';
import Toolbar from './../Toolbar';
const Events = require('../../../lib/Events.js');

import {
  BottomBar,
  EntitiesList,
 } from './styles.jsx';

export default ({
  onKeyDown = () => {},
  onKeyUp = () => {},
  items = [],
}) => {
 return <React.Fragment>
    <EntitiesList
      className="outliner"
      tabIndex="0"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      {items}
    </EntitiesList>
    <BottomBar>
      create clone delete
    </BottomBar>
  </React.Fragment>;
  }
