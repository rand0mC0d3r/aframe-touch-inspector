import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField } from '@material-ui/core';

export const Container = styled.div`
    pointer-events: all;

    align-items: stretch;
    display: flex;
    flex-direction: column;
    pointer-events: all;
    font-size: 14px;
    justify-content: space-between;
    margin: 0 auto;
    width: 380px;
`;

export const ActionBar = styled.div`
    box-shadow: 0px -8px 14px -16px #000;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const StartActionBar = styled.div`
`;

export const EndActionBar = styled.div`
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    place-content: stretch space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 5px 5px 10px;
    align-self: stretch;
`;

export const HeaderLabel = styled.div`
    color: rgb(0 0 0 / 35%);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 2px;
`;

export const SearchContainer = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    align-self: stretch;
`;

export const SearchField = styled(TextField)`

`;

export const HeaderIcon = styled(FontAwesomeIcon)`
    color: rgb(102, 102, 102);
`;

export const BottomBar = styled.div`

`;

export const EntitiesList = styled.div`
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
    outline: none;
    flex: 1 1 auto;
    align-self: stretch;
`;