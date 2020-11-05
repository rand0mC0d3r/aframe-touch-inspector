import styled from 'styled-components';

export const InputField = styled.input`
    width: ${props => props.fullWidth ? '100%' : '60px'};
    text-align: center;
    padding: 10px 0px;
    border-radius: 5px;
    box-sizing: unset;
    border: 0px none;
    outline: 0px none;

    &:hover {
        background-color: #EEE;
    }
`;