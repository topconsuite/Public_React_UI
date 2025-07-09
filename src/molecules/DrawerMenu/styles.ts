import styled from "styled-components";
import { Drawer } from "@mui/material";

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    min-width: 370px;
    font-family: 'Roboto', sans-serif;
    
    @media (max-width: 800px) {
      min-width: 100%;
    }
    
    ::-webkit-scrollbar-track {
      background-color: #F0F0F7;
    }
    
    ::-webkit-scrollbar {
      width: 5px;
      background-color: #F0F0F7;
      
      @media (max-width: 800px) {
        width: 0px !important;
      }
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.scrollBar || "#e0e0e0"};
      border-radius: 10px;
    }
  }
`;

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  z-index: 2;
  position: sticky;
  top: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  
  svg {
    font-size: 2rem;
    fill: white;
    font-weight: bold;
  }
`;

export const Logo = styled.div`
  display: grid;
  
  svg {
    width: 40vw;
    max-width: 250px;
    min-width: 200px;
    margin-bottom: -20px !important;
  }
  
  span {
    text-align: right;
    font-size: 0.6rem;
  }
`;

export const Version = styled.span`
  text-align: right;
  font-size: 0.6rem;
  font-family: 'Roboto', sans-serif;
`;

export const Help = styled.div`
  display: flex;
  justify-content: flex-end;
  
  .helpItem {
    display: flex;
    align-items: center;

    .MuiListItemIcon-root {
      min-width: 35px;
    }
    
    svg {
      fill: white;
    }
  }
`;

export const HelpItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Profile = styled.div`
  align-items: center;
  padding: 0 20px 20px 20px;
  display: flex;
  justify-content: space-between;
`;

export const Photo = styled.div`
  background: white;
  border-radius: 50%;
  
  img {
    width: 70px;
  }
`;

export const Data = styled.div`
  padding-left: 15px;
  text-align: right;
`;

export const Name = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

export const Email = styled.div`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;

export const Menu = styled.div`
  padding: 20px;
  color: rgba(0,0,0,0.6);
  flex: 1;
  font-family: 'Roboto', sans-serif;
`;

export const MenuBox = styled.div`
  margin-bottom: 20px;
`;

export const MenuTitle = styled.div`
  font-size: 0.8rem;
  margin-bottom: 5px;
  font-family: 'Roboto', sans-serif;
`;

export const MenuContent = styled.div`
  .MuiList-root {
    padding-bottom: 0;
    padding-top: 0;
    
    .MuiListItem-root {
      padding-left: 10px;
      
      .item {
          gap: 8px;
          display: flex;
          width: 100%;
          flex-direction: row !important;
          align-items: center;
          
          .text {
            padding-left: 10px;
            font-size: 1.15rem;
            font-family: 'Roboto', sans-serif;
          }
        }
    }
  }
`;

export const Logout = styled.div`
  position: sticky;
  bottom: 0;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  z-index: 2;
  font-family: 'Roboto', sans-serif;
  border-top: 1px solid #e0e0e0;
  
  svg {
    fill: white;
  }

  .item{
    gap: 8px;
    display: flex;
    width: 100%;
    flex-direction: row !important;
    align-items: center;
  }
`;
