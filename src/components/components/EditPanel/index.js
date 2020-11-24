import React from 'react';
import ComponentsContainer from './../ComponentsContainer';

import {
  Wrapper,
  EmptyContainer,
  ContainerWrapper,
} from './styles.jsx';

export default ({ entity = null }) => {
  const [ visible, setVisible ] = React.useState(true);

  React.useEffect(() => {
    setVisible(!!entity);
  }, [ entity ]);

  return <Wrapper>
    {entity ? <React.Fragment>
      {visible && <ContainerWrapper>
        <ComponentsContainer entity={entity} />
      </ContainerWrapper>}
    </React.Fragment> : <EmptyContainer>
      No Entity. Please select something from the scene.
    </EmptyContainer>}
  </Wrapper>;
};
