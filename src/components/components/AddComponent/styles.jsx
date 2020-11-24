import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const StyledButton = styled(IconButton)`
    width: 40px;
`;

export const StyledMenuItem = styled.div`
    color: #555 !important;
    font-size: 13px !important;
    text-transform: capitalize;
`;

export const ButtonWrapper = styled.div`
    border-right: 1px solid #AAA;
    padding-right: 0px;
    margin-right: 10px;
    align-self: stretch;
    display: flex;
    align-items: center;
    margin-top: 5px;
}
`;

export const Container = styled.div`
    cursor: default;
    padding: 10px 15px;
    background: var(--background-paper-translucent);
    border-radius: 8px 8px 0px 0px;

    height: 700px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-items: stretch;
    align-items: stretch;
`;
