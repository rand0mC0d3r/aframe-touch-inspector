import styled from 'styled-components';

export const ColorContainer = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

export const ColorPreview = styled.input`
    background-color: transparent;
    margin-right: 5px;
    border: 0px none;
    width: 33px;
    padding: 0px;
    height: 33px;
`;

export const InputField = styled.input`
    width: 60px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    box-sizing: unset;
    border: 0px none;
    margin-right: 5px;
`;