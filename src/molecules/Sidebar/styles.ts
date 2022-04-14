import styled from "styled-components";

interface SidebarStyleProps {
  primaryColor: string;
}

const Container = styled.nav<SidebarStyleProps>`

  >:first-child {
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
  }

  width: 60px;
  min-width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 6px;
  padding-bottom: 16px;
  transition: all 0.5s;
  border-top-right-radius: 10px;
  overflow: auto;
  overflow-x: hidden;
  background-color: ${(props) => props.primaryColor};

  ::before {
    content: '';
    width: 100%;
    box-shadow: -11px 0px 4.5px 2px ${(props) => props.primaryColor};
    z-index: 10;
  }
`;

const Menus = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-bottom: 20px;
  overflow: auto;
`;

export { Container, Menus };
