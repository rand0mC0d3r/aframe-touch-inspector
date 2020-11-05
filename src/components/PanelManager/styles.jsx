import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

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

export const UpperMenuContainer = styled.div`
    border-bottom: 1px solid var(--border-default);
    margin: 5px 0px 0px 0px;
    align-self: center;
    padding-bottom: 5px;
`;
export const MenuContainer = styled.div`
    border-top: 1px solid var(--border-default);
    margin: 0px 0px 5px 0px;
    align-self: center;
    padding-top: 5px;
`;

export const TabItem = styled(Tab)`
    min-width: 100% !important;
    max-width: 100% !important;
    font-size: 20px !important;
    padding: 10px 0px !important;

    &.MuiTab-textColorPrimary.Mui-selected {
        color: ${props => props.accent ? props.accent : 'var(--default-base-color)'};
    }
`;

export const TabIcon = styled(FontAwesomeIcon)`
    padding: 10px 0px !important;
`;

export const TabsContainer = styled(Tabs)`
    width: 100%;
    position: relative;
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
    position:absolute;
    right: 10px;
    bottom: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: flex-start;
    align-items: flex-end;

    & .PrivateTabIndicator-root-1 {
        background-color: ${props => props.accent ? props.accent : 'var(--default-base-color)'};
        width: 3px;
        border-radius: 5px 0px 0px 5px;
    }
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
    margin: 0px 10px;
    pointer-events: all;
    margin-bottom: 60px;
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