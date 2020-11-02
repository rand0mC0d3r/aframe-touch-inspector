import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
    position: absolute;
    left: 10px;
    pointer-events: all;

    align-items: center;
    display: flex;
    flex-direction: column;
    pointer-events: all;
    padding: 10px;
    font-size: 14px;
    justify-content: space-between;
    margin: 0 auto;
    background-color: rgba(253, 253, 253, 0.69);
    backdrop-filter: blur(25px);
    border-radius: 8px;
    box-shadow: rgb(0 0 0) 0px 0px 10px -9px, rgb(0 0 0) 0px 0px 10px -9px, rgb(0 0 0) 0px 0px 10px -9px;
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

export const SearchField = styled(TextField)`
    align-self: stretch;
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
`;