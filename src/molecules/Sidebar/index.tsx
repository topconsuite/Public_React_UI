import React from "react";
import { ReactSVG } from "react-svg";

import { SidebarContainer, SidebarMenus, SidebarTelluriaGroupLogo } from "./styles";

interface SidebarProps {
  children: JSX.Element;
  primaryColor: string;
  companyIconPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  children, primaryColor, companyIconPath
}) => (
  <SidebarContainer primaryColor={primaryColor}>
    <SidebarMenus>
      { children }
    </SidebarMenus>
    <SidebarTelluriaGroupLogo primaryColor={primaryColor}>
      <a href="https://telluria.com.br/" target="_blank" rel="noreferrer" tabIndex={-1}>
        <ReactSVG src={companyIconPath} alt="Telluria Group icon" />
      </a>
    </SidebarTelluriaGroupLogo>
  </SidebarContainer>
);

export default Sidebar;
