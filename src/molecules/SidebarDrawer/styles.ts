import styled from "styled-components";
import { ReactSVG } from "react-svg";

import { Drawer } from "../../libraries/mui/components";

interface SidebarStyleProps {
  primarycolor: string;
}

const SidebarDrawerContainer = styled(Drawer)`
  .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
    border-top-right-radius: 15px;
    background-color: none;
  }
`;

const SidebarDrawerContent = styled.div<SidebarStyleProps>`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  transition: all 0.5s;
  border-top-right-radius: 15px;
  overflow: auto;
  overflow-x: hidden;
  background-color: ${(props) => props.primarycolor};
`;

const SidebarDrawerHeader = styled.div<SidebarStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
  box-shadow: -13px 5px 6px 3px ${(props) => props.primarycolor};
  z-index: 10;

  > :last-child {
    cursor: pointer;
    transition: all 0.5s;
    
    :hover {
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }
`;

const SidebarDrawerBody = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-bottom: 20px;
  overflow: auto;
  
  .active {
    * {
      opacity: 100%;
      > i {
        display: block;
      }
      :hover {
        > i {
          opacity: 100% !important;
        }
      }
    }
  }
`;

const SidebarDrawerFooter = styled.div<SidebarStyleProps>`
  width: 100%;
  box-shadow: -11px -5px 6px 3px ${(props) => props.primarycolor};
  transition: all 0.5s;
  z-index: 10;
`;

const SidebarDrawerProductIcon = styled(ReactSVG)`
  
`;

export {
  SidebarDrawerContainer,
  SidebarDrawerContent,
  SidebarDrawerHeader,
  SidebarDrawerBody,
  SidebarDrawerFooter,
  SidebarDrawerProductIcon
};
