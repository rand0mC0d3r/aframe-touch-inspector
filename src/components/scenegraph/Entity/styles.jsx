import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    padding: 5px 0px;
    border-radius: 5px 0px 0px 5px;
    border-left: 3px solid ${props => props.active ? '#3f51b5' : "transparent"};
    background-color: ${props => props.active ? '#cfcfcf' : "transparent"};
    cursor: pointer;
    display: flex;
    align-content: center;
    align-items: center;

    &:hover {
        background-color: #bbb;
    }
`;

export const ChildrenContainer = styled.div`
    border: 1px solid #CCC;
    border-radius: 5px;
    padding: 1px 5px;
    margin-right: 5px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const ChildrenLabel = styled.span`
    font-size: 10px;
`;

export const VisibleIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
    margin-left: 3px;
    opacity: 0.5;
`;

export const ChildrenIcon = styled(FontAwesomeIcon)`
    margin-right: 3px;
    opacity: 0.5;
`;

export const ExpandIcon = styled(FontAwesomeIcon)`
    margin-right: 5px;
    opacity: 0.5;
`;