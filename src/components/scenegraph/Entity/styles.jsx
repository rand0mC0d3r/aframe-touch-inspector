import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
   padding: 5px 0px;
   background-color: ${props => props.active ? '#ccc' : "transparent"};
   cursor: pointer;

   &:hover {
       background-color: #aaa;
   }
`;

export const VisibleIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

export const ExpandIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;