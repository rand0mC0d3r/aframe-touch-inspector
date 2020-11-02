import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const Wrapper = styled.div`
    width: 500px;
    position: relative;
    // margin-right: 25px;
    align-self: stretch;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;

export const ContainerWrapper = styled.div`
    display: flex;

    width: 100%;
    height: 340px;

    position: absolute;
    bottom: 50px;
    // padding: 15px;

    background-color: rgba(253, 253, 253, 0.69);
    backdrop-filter: blur(25px);
    border-radius: 8px 8px 0px 0px;
    box-shadow: inset rgb(0 0 0) 0px 0px 10px -9px, inset rgb(0 0 0) 0px 0px 10px -9px, inset rgb(0 0 0) 0px 0px 10px -9px;

    margin: 0px;
`;

export const EntityContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;
