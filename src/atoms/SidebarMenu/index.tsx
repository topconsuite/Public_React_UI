import React from "react";

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
}) => (
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

export default SidebarMenu;
