import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { StyledSelect } from './styles.jsx';

export default ({
  name = '',
  onChange = () => {},
  options = [],
  value = ''
}) => {
  const _onChange = event => {
    onChange(name, event.target.value);
  };

  return <FormControl>
    <InputLabel id="none-selected">none</InputLabel>
    <StyledSelect
      labelId="none-selected"
      value={value}
      onChange={_onChange}
    >
      {options.map((option, i) => (
        <MenuItem key={i} value={option}>{option}</MenuItem>)
      )}
    </StyledSelect>
  </FormControl>;
};