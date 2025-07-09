import styled from "styled-components";
import { Drawer, List, Typography } from "@mui/material";

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 300px;
    background-color: #f5f5f5;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Version = styled(Typography)`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

export const Help = styled.div`
  margin-bottom: 16px;
`;

export const HelpItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`;

export const Photo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled(Typography)`
  font-weight: 500;
  font-size: 14px;
`;

export const Email = styled(Typography)`
  font-size: 12px;
  color: #666;
`;

export const Menu = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const MenuBox = styled.div`
  margin-bottom: 16px;
`;

export const MenuTitle = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const MenuContent = styled(List)`
  padding: 0;
  
  .MuiListItem-root {
    padding: 8px 0;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const Logout = styled.div`
  padding: 16px 0;
  border-top: 1px solid #e0e0e0;
  
  .MuiListItem-root {
    padding: 8px 0;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
