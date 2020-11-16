import React from 'react';
import { IconButton } from '@material-ui/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';

import {
  Container,
  Wrapper,
  CloseIcon,
} from './styles.jsx';

export default  ({ handleClose = () => {} }) => <Wrapper>
  <Container>
    <IconButton onClick={handleClose} title="Close dialog ...">
      <CloseIcon size="lg" icon={faTimesCircle}/>
    </IconButton>
  </Container>
</Wrapper>;