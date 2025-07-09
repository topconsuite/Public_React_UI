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

  .MobileFontSize {
    font-size: 3.5rem;
  }

  .accordionComponent {
    margin: 0px !important;
    padding: 0px !important;
    border-radius: 10px;
    box-shadow: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:before {
      display: none;
    }
  }

  .MuiAccordion-root {
    padding: ${(props) => (props.showExpandIcon ? "12px" : "12px 12px 20px 12px")};

    .MuiAccordionSummary-root {
      min-height: 0 !important;
    }
  }

  .MuiAccordionSummary-root {
    padding: 0 !important;
    margin: 0;
    width: 100%;
    background-color: ${({ color }) => color || "#6a4dc3"} !important;
    border-radius: 10px !important;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    &.Mui-expanded {
      min-height: unset;
    }
  }

  .MuiAccordionSummary-content {
    display: flex !important;
    flex-direction: row !important; /* Alterado para row para alinhar título e contador */
    justify-content: space-between !important; /* Para separar o título e o contador */
    align-items: center !important;
    overflow: hidden;
    transition: all 1s ease-in-out;
    padding: 0px;
    margin: 0;
    color: white; /* Texto em branco */
    border-radius: 10px;
    &.Mui-expanded {
      padding: 0 !important;
      margin: 0 !important;
    }

  }

  .MuiAccordionSummary-expandIconWrapper.css-yw020d-MuiAccordionSummary-expandIconWrapper {
    margin: 16px;
    color: white;
  }

  .MuiAccordionDetails-root {
    padding: 8px !important;
    max-height: 78vh;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
      width: 6px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
  }

  .MuiTypography-root {
    display: flex;
    flex-direction: column;
    gap: 16px;
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

  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    border-radius: 10px !important;
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
const Title = styled.div`
  font-size: 1.3rem;
  padding: 32px;
  font-family: Roboto;
  color: white;
`;

const Counter = styled.div`
  font-size: 1.9rem;
  padding: 32px;
  font-family: Roboto;
  font-weight: bold;
  color: white;
`;

const ActivityDropdown = styled.div`
  background-color: white;
  padding: 8px 16px;
  margin: 2px;
  font-size: 16px;
  color: #333;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;

  font-family: "Roboto";
  &:hover {
    background-color: #f5f5f5;
  }
`;

export {
  Container, Status, Title, Counter, ActivityDropdown
};
