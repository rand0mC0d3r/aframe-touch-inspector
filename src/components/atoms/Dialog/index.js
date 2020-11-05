import React from 'react';

import { StyledDialog, Container } from './styles.jsx';

export default ({ children, actions, ...props }) => <StyledDialog {...props}>
  <Container>
    {children}
  </Container>
  {actions}
</StyledDialog>;