import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PropertyIcon = styled(FontAwesomeIcon)`
    color: #747474;
    margin-right: 10px;
`;

export const PropertyContainer = styled.div`
    padding: 5px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
`;

export const PropertyLabel = styled.label`
    flex: 0 0 140px;
    text-transform: capitalize;
    font-size: 11px;
    color: #333;
    line-height: 14px;
`;

export const PropertyWidget = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;
