import React from 'react';

import { StyledDialog, Container } from './styles.jsx';

export default ({
  children,
  actions,
  open,
  fullWidth,
  padded = 1,
  onClose = () => {},
  maxWidth = 'md'
}) => <StyledDialog {...{open, padded, maxWidth, fullWidth, onClose}}>
  <Container>
    {children}
  </Container>
  {actions}
</StyledDialog>;