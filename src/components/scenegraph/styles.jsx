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
    background-color: #f1f3f4;
    border-radius: 8px;
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;
`;

export const EntitiesList = styled.div`
    height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
`;