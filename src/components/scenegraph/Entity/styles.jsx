import styled from 'styled-components';

export const Container = styled.div`
   padding: 5px 0px;
   background-color: ${props => props.active ? '#ccc' : "#fff"};
   cursor: pointer;

   &:hover {
       background-color: #aaa;
   }
`;