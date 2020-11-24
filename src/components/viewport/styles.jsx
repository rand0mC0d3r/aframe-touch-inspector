import styled from 'styled-components';

export const ViewportBar = styled.div`
    align-items: stretch;
    display: flex;
    pointer-events: all;
    font-size: 14px;
    justify-content: space-between;
    margin: 0 auto;

    padding: 3px 6px;

    background-color: #fdfdfd;
    border-radius: 8px;
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;
    border-bottom: 2px solid ${props => props.accent || 'transparent'};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 10px;
    right: 75px;
`;

export const SidebarWrapper = styled.div`
    border-left: 1px solid #999;
    padding-left: 10px;
    margin-left: 5px;

    align-items: center;
    display: flex;
`;

export const ToolsBar = styled.div`
    align-items: center;
    display: flex;
    pointer-events: all;
    font-size: 14px;
    justify-content: space-between;
    margin-right: 10px;

    padding: 3px 6px;

    background-color: rgba(255,255,255,0.69);
    border-radius: 8px;
    backdrop-filter: blur(25px);
    box-shadow: 0px 0px 12px -10px #000, 0px 0px 12px -10px #000, 0px 0px 12px -8px #000;
`;