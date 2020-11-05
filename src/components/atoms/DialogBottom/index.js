import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';

import {
  Container,
  Wrapper,
} from './styles';

export default  ({ handleClose = () => {} }) => <Wrapper>
  <Container>
    <IconButton onClick={handleClose} title="Close dialog ...">
      <FontAwesomeIcon size="lg" icon="times-circle"/>
    </IconButton>
  </Container>
</Wrapper>;