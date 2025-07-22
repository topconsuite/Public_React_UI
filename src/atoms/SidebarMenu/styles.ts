import styled from "styled-components";

interface SidebarMenuContainerProps {
  active?: boolean;
}

const Container = styled.div<SidebarMenuContainerProps>`
  position: relative;
  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.active ? "100%" : "70%")};
  padding: 15px;

  > :first-child {
    > :first-child {
      width: 21px;
      height: 21px;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  ${(props) => props.active && `
    svg {
      fill: white !important;
      color: white !important;
      
      path {
        fill: white !important;
      }
      
      circle {
        fill: white !important;
      }
      
      rect {
        fill: white !important;
      }
    }
  `}

  :hover {
    opacity: 100%;
    cursor: pointer;
    
    svg {
      fill: white !important;
      color: white !important;
      
      path {
        fill: white !important;
      }
      
      circle {
        fill: white !important;
      }
      
      rect {
        fill: white !important;
      }
    }
  }
`;

const Identifier = styled.i`
  position: absolute;
  left: 0px;
  width: 6px;
  height: 80%;
  border-radius: 50px;
  background-color: #ff9900;

  :hover {
      background-color: red !important;
  }
`;

export { Container, Identifier };
