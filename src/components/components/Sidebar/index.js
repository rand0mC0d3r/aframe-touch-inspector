import React from 'react';
import PropTypes from 'prop-types';
import ComponentsContainer from './../ComponentsContainer';
import Events from '../../../lib/Events';

import { Container } from './styles.jsx';

export default ({
    entity = {},
    visible = false,
  }) => {
  const [ open, setOpen ] = React.useState(false);

  React.useEffect(() => {

    Events.on('componentremove', event => {
      forceUpdate();
    });

    Events.on('componentadd', event => {
      forceUpdate();
    });
  }, [])

  const handleToggle = () => {
    setOpen(!open);
  };

  return <React.Fragment>
    {entity && visible && <Container>
      <ComponentsContainer entity={entity} />
    </Container>}
  </React.Fragment>;
}
