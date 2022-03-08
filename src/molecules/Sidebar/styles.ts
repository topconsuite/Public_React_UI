import styled from "styled-components";

interface SidebarStyleProps {
  primaryColor: string;
}

const SidebarContainer = styled.nav<SidebarStyleProps>`

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
    box-shadow: -11px 0px 4.5px 5px ${(props) => props.primaryColor};
    z-index: 10;
  }
`;

const SidebarMenus = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-bottom: 20px;
  overflow: auto;
`;

const SidebarTelluriaGroupLogo = styled.div<SidebarStyleProps>`
  width: 100%;
  box-shadow: -11px -5px 6px 2px ${(props) => props.primaryColor};
  transition: all 0.5s;

  :hover {
    transform: scale(1.1);
  }

  > :first-child {
    fill: rgb(255, 255, 255, 0.2);
    svg {
      margin-left: calc(50% - (45px / 2));
      width: 45px;
    }
  }

  z-index: 10;
`;

export { SidebarContainer, SidebarMenus, SidebarTelluriaGroupLogo };
