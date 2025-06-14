import React from "react";
import { ReactSVG } from "react-svg";
import { iconOptions } from "@/helpers";
import Tooltip from "../Tooltip";
import { Skeleton } from "../../libraries/mui/components";
import * as Styled from "./styles";

export interface SidebarMenuProps {
  id: string;
  title: string;
  icon: string;
  identifierColor?: string;
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
        src={iconOptions[icon as keyof typeof iconOptions]}
        alt="menu Icon"
        loading={() => <Skeleton variant="rectangular" animation="wave" width={20} height={20} />}
        beforeInjection={(svg) => {

          if (identifierColor) {
            svg.setAttribute("fill", identifierColor);
            svg.setAttribute("color", identifierColor);

            const paths = svg.querySelectorAll("path");

            paths.forEach((path) => {
              path.setAttribute("fill", identifierColor);
            });

            const circles = svg.querySelectorAll("circle");

            circles.forEach((circle) => {
              circle.setAttribute("fill", identifierColor);
            });

            const rects = svg.querySelectorAll("rect");

            rects.forEach((rect) => {
              rect.setAttribute("fill", identifierColor);
            });
          }
        }}
      />
      {identifierColor && <Styled.Identifier identifierColor={identifierColor} />}
    </Styled.Container>
  </Tooltip>
);

SidebarMenu.defaultProps = {
  identifierColor: undefined
};

export default SidebarMenu;
