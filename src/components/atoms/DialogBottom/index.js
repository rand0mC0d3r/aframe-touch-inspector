import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
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