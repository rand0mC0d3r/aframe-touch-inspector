import React from 'react';

import { StyledDialog, Container } from './styles.jsx';

export default ({
  children,
  actions,
  open,
  fullWidth,
  onClose = () => {},
  maxWidth = "md"
}) => <StyledDialog {...{open, maxWidth, fullWidth, onClose}}>
  <Container>
    {children}
  </Container>
  {actions}
</StyledDialog>;