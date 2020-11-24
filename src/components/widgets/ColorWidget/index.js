import React from 'react';

import {
  InputField,
  ColorContainer,
  ColorPreview
} from './styles.jsx';

let color = new THREE.Color();

export default ({
  componentname = '',
  entity = [],
  name = '',
  onChange = () => {},
  value = '#ffffff'
}) => {
  const [ pickerValue, setPickerValue ] = React.useState('#ffffff');

  React.useEffect(() => {
    setPickerValue(getHexString(value));
  }, [ value ]);

  const setValue = value => {
    const pickerValue = getHexString(value);
    setPickerValue(pickerValue);
    onChange(name, value);
  };

  const getHexString = value => {
    // debugger;
    return '#' + color.set(value).getHexString();
  };

  const handleOnChange = e => {
    setValue(e.target.value);
  };

  const onKeyUp = e => {
    e.stopPropagation();
    setValue(e.target.value);
  };

  return <ColorContainer>
    <ColorPreview type="color"
      value={pickerValue}
      title={value}
      onChange={handleOnChange}
    />
    <InputField type="text"
      value={value}
      onKeyUp={onKeyUp}
      onChange={handleOnChange}
    />
  </ColorContainer>;
};
