import React from "react";
import { ReactSVG } from "react-svg";
import { iconTypes } from "@/helpers/icons";
import Tooltip from "../Tooltip";
import { Skeleton } from "../../libraries/mui/components";
import * as Styled from "./styles";

export interface SidebarMenuProps {
  id: string;
  title: string;
  icon: string;
  identifierColor?: string;
  active?: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  id, title, icon, identifierColor, active
}) => (
  <Tooltip title={title} position="right">
    <Styled.Container
      tabIndex={-1}
      id={id}
      active={active}
    >
      <ReactSVG
        src={iconTypes[icon as keyof typeof iconTypes]}
        alt="menu Icon"
        loading={() => <Skeleton variant="rectangular" animation="wave" width={20} height={20} />}
        beforeInjection={(svg) => {
          const color = active ? "white" : identifierColor;

          if (color) {
            svg.setAttribute("fill", color);
            svg.setAttribute("color", color);

            const paths = svg.querySelectorAll("path");

            paths.forEach((path) => {
              path.setAttribute("fill", color);
            });

            const circles = svg.querySelectorAll("circle");

            circles.forEach((circle) => {
              circle.setAttribute("fill", color);
            });

            const rects = svg.querySelectorAll("rect");

            rects.forEach((rect) => {
              rect.setAttribute("fill", color);
            });
          }
        }}
      />
      {(active && identifierColor) && <Styled.Identifier identifierColor={identifierColor} />}
    </Styled.Container>
  </Tooltip>
);

SidebarMenu.defaultProps = {
  identifierColor: undefined,
  active: false
};

export default SidebarMenu;
