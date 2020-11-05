import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

export const StyledDialog = styled(Dialog)`
    & .inspector-MuiDialog-paper {
        overflow: visible !important;
    }
`;

export const Container = styled.div`
    cursor: default;
    padding: ${props => props.padded ? '10px 15px' : '0px'};
    background: var(--background-paper-translucent);
    border-radius: 8px 8px 0px 0px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
`;