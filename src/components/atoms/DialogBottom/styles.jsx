import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CloseIcon = styled(FontAwesomeIcon)`
    color: #000;
    background-color: rgba(255,255,255,0.5);
    border: 3px solid rgba(255,255,255,0.5);
    border-radius: 60px;
`;

export const Wrapper = styled.div`
    position:relative;
    height: 0px;
    width: 100%;
`;

export const Container = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
`;