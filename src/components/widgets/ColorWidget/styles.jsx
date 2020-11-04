import styled from 'styled-components';

export const ColorContainer = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
`;

export const ColorPreview = styled.input`
    margin-right: 10px;
    border-radius: 40px;
    border: 0px none;
    width: 26px;
    background-color: transparent;
    padding: 0px;
    height: 26px;
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