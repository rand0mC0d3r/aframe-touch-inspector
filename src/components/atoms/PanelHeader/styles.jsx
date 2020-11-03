import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
    margin: 5px 5px 10px 5px;
`;

export const Summary = styled.div`
    color: var(--text-muted);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 2px;
`;
export const Icon = styled(FontAwesomeIcon)`
    padding-right: 5px !important;
    color: #666;
`;
