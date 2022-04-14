import React, { useEffect } from "react";

import { ReactSVG } from "react-svg";

import Tooltip from "../Tooltip";
import { Skeleton } from "../../libraries/mui/components";

import * as Styled from "./styles";

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
    <Tooltip title={title} position="right">
      <Styled.Container
        tabIndex={-1}
        id={id}
      >
        <ReactSVG
          src={icon}
          alt="menu Icon"
          loading={() => <Skeleton variant="rectangular" animation="wave" width={20} height={20} />}
        />
        <Styled.Identifier identifierColor={identifierColor} />
      </Styled.Container>
    </Tooltip>
  );
};

export default SidebarMenu;
