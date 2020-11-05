import React from 'react';
import Events from '../../../lib/Events';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import DialogBottom from './../../atoms/DialogBottom';
import Dialog from './../../atoms/Dialog';

import ComponentIcon from './../../atoms/ComponentIcon';

import { StyledSelect, StyledButton, StyledMenuItem } from './styles.jsx';

var DELIMITER = ' ';

export default ({
  entity = {},
}) => {
  const [ options, setOptions ] = React.useState([]);
  const [ selection, setSelection ] = React.useState('');

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const componentObject = event.target.value;
    setSelection(componentObject);
    addComponent(componentObject);
  };

  const addComponent = value => {
    let componentName = value.value;
    var packageName;
    var selectedOption = options.filter(option => option.value === componentName)[0];
    if (AFRAME.components[componentName].multiple) {
      const id = prompt(
        `Provide an ID for this component (e.g., 'foo' for ${componentName}__foo).`
      );
      componentName = id ? `${componentName}__${id}` : componentName;
    }
    entity.setAttribute(componentName, '');
    Events.emit('componentadd', { entity: entity, component: componentName });
  };

  const getComponentsOptions = () => {
    const usedComponents = Object.keys(entity.components);
    var commonOptions = Object.keys(AFRAME.components)
      .filter(componentName => AFRAME.components[componentName].multiple ||
          usedComponents.indexOf(componentName) === -1)
      .sort()
      .map(function(value) {
        return { value: value, label: value, origin: 'loaded' };
      });
    const cummulatedOptions = [...commonOptions, ...options.sort(function(a, b) {
      return a.label === b.label ? 0 : a.label < b.label ? -1 : 1;
    })];
    console.log(cummulatedOptions);
    setOptions(cummulatedOptions);
  }

  const renderOption = option => {
    var bullet = (
      <span title="Component already loaded in the scene">&#9679;</span>
    );
    return (
      <strong className="option">
        {option.label} {option.origin === 'loaded' ? bullet : ''}
      </strong>
    );
  }

  React.useEffect(() => {
    getComponentsOptions();
  }, [])

  return <div>
    {options && <React.Fragment>
      {/* <FormControl variant="outlined">
        <StyledSelect
          id="addComponent"
          onChange={handleChange}
          value={selection}
        >
          {options.map((option, i) => <StyledMenuItem key={i} value={option}>
            <ComponentIcon returnNull={true} componentName={option.label}/> {option.label}
          </StyledMenuItem>)}
        </StyledSelect>
      </FormControl> */}


       <StyledButton onClick={handleClickOpen}>+</StyledButton>
      <Dialog
      maxWidth="md"
      fullWidth={true}
      open={open}
      onClose={handleClose}
      actions={<DialogBottom {...{handleClose}} />}
    >
        dd
    </Dialog>
    </React.Fragment>}
  </div>;
}

function isComponentInstanced(entity, componentName) {
  for (var component in entity.components) {
    if (component.substr(0, component.indexOf('__')) === componentName) {
      return true;
    }
  }
}