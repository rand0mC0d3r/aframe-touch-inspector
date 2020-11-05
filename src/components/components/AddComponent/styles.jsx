import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export const StyledSelect = styled(Select)`
    width: 60px;
    pointer-events: all;
`;

export const StyledButton = styled(Button)`
    width: 60px;
    pointer-events: all;
`;

export const StyledMenuItem = styled(MenuItem)`
    color: #555 !important;
    font-size: 13px !important;
    text-transform: capitalize;
`;
