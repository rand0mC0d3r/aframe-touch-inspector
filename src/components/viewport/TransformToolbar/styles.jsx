import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
`;

export const TransformationIcon = styled(FontAwesomeIcon)`
    opacity: ${props => props.active ? '1' : '0.35'};
    transform: scale(${props => props.active ? '1.2' : '0.85'});
    ${props => props.accent ? `color: ${props.accent}` : ''};
`;
