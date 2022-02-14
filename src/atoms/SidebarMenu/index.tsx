import React, { useEffect } from "react";

import { SidebarMenuContainer, SidebarMenuTitle, SidebarMenuIdentifier } from "./styles";

export interface SidebarMenuProps {
  id: string;
  title: string;
  icon: string;
  identifierColor: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  id, title, icon, identifierColor
}) => {

  const sidebarParentIsAnAnchorElement = () => {
    const element = document.getElementById(id);

    const tagName = element?.parentElement?.tagName.toUpperCase();

    return tagName === "A";
  };

  useEffect(() => {
    if (!sidebarParentIsAnAnchorElement()) {
      throw new Error("SidebarMenu must be used as a child of HTMLAnchorElement.");
    }
  }, []);

  return (
    <SidebarMenuContainer
      tabIndex={-1}
      id={id}
    >
      <img src={icon} alt="menu Icon" />
      <SidebarMenuTitle>{title}</SidebarMenuTitle>
      <SidebarMenuIdentifier identifierColor={identifierColor} />
    </SidebarMenuContainer>

  );
};

export default SidebarMenu;
