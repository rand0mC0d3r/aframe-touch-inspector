import React from 'react';
import { Container, Summary, Icon } from './styles.jsx';

export default ({icon, title}) => <Container>
  <Summary>{title}</Summary>
  <Icon icon={icon} />
</Container>;