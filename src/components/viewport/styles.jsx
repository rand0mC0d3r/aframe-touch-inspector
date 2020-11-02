import styled from 'styled-components';

export const ViewportBar = styled.div`
    align-items: center;
    display: flex;
    pointer-events: all;
    font-size: 14px;
    justify-content: space-between;
    margin: 0 auto;
    // background-color: #f1f3f4;
    // border-radius: 8px;
    // box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;

    // background-color: rgba(253,253,253,0.69);
    // backdrop-filter: blur(25px);
    // border-radius: 8px;
    // box-shadow: rgb(0 0 0) 0px 0px 10px -9px, rgb(0 0 0) 0px 0px 10px -9px, rgb(0 0 0) 0px 0px 10px -9px;

    background-color: #f1f3f4;
    border-radius: 8px;
    border-bottom: 2px solid transparent;
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;
`;



export const DetectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 15px;
`;