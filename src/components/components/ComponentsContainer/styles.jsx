import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export const Container = styled.div`
    height: 0px;
`;

export const EmptySection = styled.div`
    flex: 1 1 auto;
    width: 100%;
    cursor: default;
`;

export const ToolboxSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
`;

export const MenuContainer = styled.div`
    border-top: 1px solid var(--border-default);
    margin: 0px 0px 5px 0px;
    align-self: center;
    padding-top: 5px;
`;

export const TabItem = styled(Tab)`
    min-width: 60px !important;
    width: 60px;
`;

export const TabIcon = styled(FontAwesomeIcon)`
    padding: 10px 0px !important;
`;

export const TabsContainer = styled(Tabs)`
    width: 100%;
    position: relative;
    pointer-events: all;
`;

export const PanelBar = styled.div`
    max-height: 95vh;

    pointer-events: all;
    display: flex;
    flex: 0 0 56px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: flex-start;
    width: 56px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;

    background-color: var(--background-paper);
`;

export const PanelWrapper = styled.div`
    pointer-events: none;
    z-index: 2;
    cursor: default;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    align-items: flex-start;
    height: 100%;
`;

export const TabsListWrapper = styled.div`
    pointer-events: none;
    user-select: none;
    position: relative;
    display: block;
`;

export const ResizeContainer = styled.div`
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;
    overflow: hidden auto;
    border-radius: 8px;
`;

export const ResizeWrapper = styled.div`
    position: relative;
    width: 100%;
    flex: 0 1 auto;
    pointer-events: all;
    overflow: hidden auto;
    box-shadow: inset 0px 10px 16px -19px #000;
`;

export const WhiteLayer = styled.div`
    background-color: rgba(253, 253, 253, 0.69);
    position:absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-radius: 8px;
`;

export const TabListItem = styled.div`
    pointer-events: all;
    padding: 10px;
    // background-color: var(--background-paper);
    backdrop-filter: blur(25px);
    // box-shadow: 0px 0px 10px 19px #000;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
    max-height: 100%;

    position: relative;
    border-radius: 8px;
`;

export const TabsItemWrapper = styled.div`

`;

export const TabsBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: stretch;
    align-items: center;
`;