import React from 'react';
import Events from '../../../lib/Events';

import DialogBottom from './../../atoms/DialogBottom';
import Dialog from './../../atoms/Dialog';

import ComponentIcon from './../../atoms/ComponentIcon';

import {
  StyledButton,
  Container,
  StyledMenuItem
} from './styles.jsx';

export default ({
  entity = {},
}) => {
  const [ options, setOptions ] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (object) => {
    addComponent(object);
  };

  const addComponent = value => {
    let componentName = value.value;
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
    setOptions(cummulatedOptions);
  };

  React.useEffect(() => {
    getComponentsOptions();
  }, []);

  return <div>
    {options && <React.Fragment>
      <StyledButton onClick={handleClickOpen}>+</StyledButton>
      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        actions={<DialogBottom {...{handleClose}} />}
      >
        <Container>
          {options.map((option, i) => <StyledMenuItem
            onClick={() => handleChange(option)}
            key={i}
            value={option}
          >
            <ComponentIcon returnNull={true} componentName={option.label}/> {option.label}
          </StyledMenuItem>)}
        </Container>
      </Dialog>
    </React.Fragment>}
  </div>;
};
