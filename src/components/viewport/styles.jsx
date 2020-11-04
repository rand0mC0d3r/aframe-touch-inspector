import styled from 'styled-components';

export const ViewportBar = styled.div`
    align-items: center;
    display: flex;
    pointer-events: all;
    font-size: 14px;
    justify-content: space-between;
    margin: 0 auto;

    padding: 3px;

    background-color: #fdfdfd;
    border-radius: 8px;
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;
`;

export const DetectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 10px;
    right: 75px;
`;