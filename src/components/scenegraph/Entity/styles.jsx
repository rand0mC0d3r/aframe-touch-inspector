import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    padding: 5px 0px;
    background-color: ${props => props.active ? '#bbb' : "transparent"};
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;

    &:hover {
        background-color: #aaa;
    }
`;

export const VisibleIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
    margin-left: 3px;
`;

export const ExpandIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;