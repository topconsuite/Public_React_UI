import React, { useCallback, useEffect } from "react";

import { ReactSVG } from "react-svg";

import { sidebarDrawerAtom } from "../../states/SidebarDrawerContext";

import { useAtom } from "../../libraries/jotai";
import { Skeleton } from "../../libraries/mui/components";

import * as Styled from "./styles";

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
    <Styled.Container
      onClick={handleClick}
      tabIndex={-1}
      id={id}
      secondaryColor={secondaryColor}
      type={type}
    >
      <ReactSVG
        src={icon}
        alt="menu Icon"
        loading={() => <Skeleton variant="rectangular" animation="wave" width={20} height={20} />}
      />
      <Styled.Title>{title}</Styled.Title>
      { type === "primary" ? <Styled.Identifier identifierColor={identifierColor} /> : null }
    </Styled.Container>
  );
};

export default SidebarDrawerMenu;
