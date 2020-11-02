import styled from 'styled-components';

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

export const EntitiesList = styled.div`
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
`;