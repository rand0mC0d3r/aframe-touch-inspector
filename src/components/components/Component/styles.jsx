import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ComponentTitle = styled.div`
    text-transform: uppercase;
    font-size: 13px;
    color: #444;
    font-weight: bold;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;

export const DocumentationContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
`;

export const DocuLabel = styled.div`
    background-color: #3f51b5;
    color: #EEE;
    padding: 3px 5px;
    font-size: 10px;
    border-radius: 10px;
    margin-right: 10px;
    font-weight: bold;
`;

export const DocuIcon = styled(FontAwesomeIcon)`
    color: #777;
`;

export const ButtonsContainer = styled.div`

`;