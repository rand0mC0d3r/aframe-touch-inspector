import React from 'react';
import { InputField } from './styles.jsx';

export default ({
  componentname = '', entity = [],
  name = null, onChange = () => {},
  value, fullWidth = false,
  placeholder = ''
}) => {
  const [ internalValue, setInternalValue ] = React.useState('');
  const onInternalChange = newValue => { setInternalValue(newValue); onChange(name, newValue); };

  React.useEffect(() => {
    if (internalValue !== value) setInternalValue(value);
  }, [ value ]);

  return <InputField
    {...{ fullWidth, placeholder }}
    type="text"
    className="string"
    value={internalValue || ''}
    onChange={(e) => onInternalChange(e.target.value)}
  />;
};