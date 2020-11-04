import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    margin-right: 10px;
    padding-right: 10px;
    border-right: 1px solid #CCC;
`;

export const TransformationIcon = styled(FontAwesomeIcon)`
    ${props => props.active ? `
        // background-color: white;
        // border-radius: 60px;
        // box-shadow: 0px 0px 6px 6px #fff;
        ` : ''}
    ${props => !props.active ? `
        opacity: 0.5;
    ` : ''}
`;
