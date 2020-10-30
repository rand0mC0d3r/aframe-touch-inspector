import styled from 'styled-components';

export const DetectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 10px;
`;

export const InspectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;

    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    pointer-events: none;
    position: fixed;
    bottom: 15px;
    z-index: 999;
`;