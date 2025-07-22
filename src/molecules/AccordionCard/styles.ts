import styled from "styled-components";

import { windowWidth } from "@styles/global";

interface IContainerProps {
  showExpandIcon?: boolean;
}

interface IStatusProps {
  statusColor?: string;
}

const Container = styled.div<IContainerProps>`
  width: 100%;
  font-family: 'Roboto', sans-serif;

  .accordionComponent {
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 1px 3px 1px rgb(0 0 0 / 25%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:before {
      display: none;
    }
    &:after {
      content: "";
      display: ${(props) => (props.showExpandIcon ? "none" : "block")};
      position: absolute;
      width: 42%;
      height: 5px;
      background-color: rgb(190, 190, 190);
      align-self: center;
      border-radius: 10px;
      bottom: 5px;
      margin: auto;
    }
    &.Mui-expanded {
      :after {
        background-color: rgb(235, 235, 235);
      }
    }
  }

  .MuiAccordion-root {
    padding: ${(props) => (props.showExpandIcon ? "12px" : "12px 12px 20px 12px")};

    .MuiAccordionSummary-root {
      min-height: 0 !important;
    }
  }

  .MuiAccordionSummary-root {
    max-height: 99px;
    padding: 0 !important;
    margin: 0;
    width: 100%;

    &.Mui-expanded {
      min-height: unset;
    }
  }

  .MuiAccordionSummary-content {
    display: flex !important;
    flex-direction: column !important;
    overflow: hidden;
    transition: all 1s ease-in-out;
    padding: 0;
    margin: 0;

    &.Mui-expanded {
      padding: 0 !important;
      margin: 0 !important;
    }
  }

  .MuiAccordionDetails-root {
    padding: 15px 0 0 0 !important;
  }

  .MuiCollapse-root {
    width: 100%;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 1px;
    }
  }

  .css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
    margin: 12px 0;
  }

  .css-1elwnq4-MuiPaper-root-MuiAccordion-root.Mui-expanded:last-of-type {
    margin-bottom: 10px;
  }
`;

const Status = styled.div<IStatusProps>`
  color: ${(props) => (props.statusColor ? props.statusColor : "black")};
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  bottom: 5px;
  right: 10px;

  @media ( max-width: ${windowWidth.laptop.large} ) {
    font-size: 11px;
  }
`;

export default { Container, Status };
