import styled from "styled-components";

import { windowWidth } from "@styles/global";
import { ReactSVG } from "react-svg";

interface KanbanCardSummaryIconProps {
  primarycolor: string
}

const Container = styled.div<KanbanCardSummaryIconProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  overflow: hidden;
  width: 100%;
  font-family: Roboto;
  
  > #kanbanSectionIcon {
    fill: ${(props) => props.primarycolor};

    min-width: 37px;
    width: 37px;
    height: 37px;

    @media ( max-width: ${windowWidth.laptop.large} ) {
      width: 31px;
      height: 31px;
    }
    
    @media ( max-width: ${windowWidth.mobile.large} ) {
      width: 28px;
      height: 28px;
      min-width: 28px;
    }
  }

  .caret-right-button {
      min-width: unset !important;
      padding: 4px !important;
  }
  
  .tooltip-container {
    @media ( max-width: ${windowWidth.mobile.large} ) {
      flex-direction: row;
      gap: 8px;
      margin-left: auto;
    }
  }
  
  @media ( max-width: ${windowWidth.mobile.large} ) {
    gap: 6px;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 14px;
  color: #666666;
  overflow: hidden;
  flex-grow: 1;
  
  #title1, #title2 {
    font-size: 15px;
    font-weight: 600;
    color: black;

    @media ( max-width: ${windowWidth.laptop.large} ) {
      font-size: 14px;
    }
  }

  @media ( max-width: ${windowWidth.laptop.large} ) {
    font-size: 13px;
  }
`;

const CaretRight = styled(ReactSVG)`
  > :first-child {
    width: 20px;
    height: 20px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

interface IconProps {
  iconColor: string;
}

const TimerIcon = styled.div<IconProps>`
  color: ${(props) => props.iconColor};
`;

const MaintenanceIcon = styled.div<IconProps>`
  color: ${(props) => props.iconColor};
`;

export {
  Container, Infos, CaretRight, TimerIcon, MaintenanceIcon
};
