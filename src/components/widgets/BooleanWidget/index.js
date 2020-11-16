import React from 'react';
import Switch from '@material-ui/core/Switch';

export default ({
  componentname = '',
  entity = {},
  name = '',
  onChange = () => {},
  value = false,
}) => {
  const _onChange = e => {
    const value = e.target.checked;
    onChange(name, value);
  };

  return <Switch
    id={`${componentname}.${name}`}
    checked={value}
    onChange={_onChange}
    color="primary"
  />;
};