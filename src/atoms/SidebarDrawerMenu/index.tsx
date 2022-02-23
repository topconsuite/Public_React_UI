import React, { useCallback, useEffect } from "react";

import { sidebarDrawerAtom } from "../../states/SidebarDrawerContext";
import { useAtom } from "../../libraries/jotai";

import { SidebarDrawerMenuContainer, SidebarDrawerMenuTitle, SidebarDrawerMenuIdentifier } from "./styles";

export interface SidebarDrawerMenuProps {
  id: string;
  title: string;
  icon: string;
  identifierColor: string;
  secondaryColor: string;
  type: "primary" | "secondary";
  onClick?: () => void;
}

const SidebarDrawerMenu: React.FC<SidebarDrawerMenuProps> = ({
  id, title, icon, identifierColor, secondaryColor, type, onClick
}) => {

  const [sidebarDrawer] = useAtom(sidebarDrawerAtom);

  const sidebarParentIsAnAnchorElement = () => {
    const element = document.getElementById(id);

    const tagName = element?.parentElement?.tagName.toUpperCase();

    return tagName === "A";
  };

  useEffect(() => {
    if (!sidebarParentIsAnAnchorElement()) {
      throw new Error("SidebarDrawerMenu must be used as a child of HTMLAnchorElement.");
    }
  }, []);

  const handleClick = useCallback(() => {
    if (onClick) onClick();

    sidebarDrawer.onClose();

  }, [onClick, sidebarDrawer.onClose]);

  return (
    <SidebarDrawerMenuContainer
      onClick={handleClick}
      tabIndex={-1}
      id={id}
      secondaryColor={secondaryColor}
      type={type}
    >
      <img src={icon} alt="menu Icon" />
      <SidebarDrawerMenuTitle>{title}</SidebarDrawerMenuTitle>
      { type === "primary" ? <SidebarDrawerMenuIdentifier identifierColor={identifierColor} /> : null }
    </SidebarDrawerMenuContainer>
  );
};

export default SidebarDrawerMenu;
