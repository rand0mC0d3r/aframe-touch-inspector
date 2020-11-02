import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;
    overflow: scroll;
    height: 340px;

    position: absolute;
    bottom: 60px;
    padding: 15px;
    background-color: #FFF;
    margin: 0px;
`;

export const Wrapper = styled.div`
    width: 500px;
    position: relative;
    margin-right: 25px;
    align-self: stretch;
`;

export const EntityContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;
