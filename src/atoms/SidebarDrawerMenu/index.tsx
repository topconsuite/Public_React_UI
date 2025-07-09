import React, { useCallback } from "react";
import { ReactSVG } from "react-svg";
import iconTypes from "@/helpers/icons";
import { useAtom } from "../../libraries/jotai";
import { Skeleton } from "../../libraries/mui/components";
import * as Styled from "./styles";
import { sidebarDrawerAtom } from "../../states/SidebarDrawerContext";

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

  const handleClick = useCallback(() => {
    if (onClick) onClick();

    sidebarDrawer.onClose();

  }, [onClick, sidebarDrawer]);

  return (
    <Styled.Container
      onClick={handleClick}
      tabIndex={-1}
      id={id}
      secondaryColor={secondaryColor}
      type={type}
    >
      <ReactSVG
        src={iconTypes[icon as keyof typeof iconTypes]}
        alt="menu Icon"
        loading={() => <Skeleton variant="rectangular" animation="wave" width={20} height={20} />}
        beforeInjection={(svg) => {

          if (identifierColor && type === "primary") {
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
      <Styled.Title>{title}</Styled.Title>
      { type === "primary" ? <Styled.Identifier identifierColor={identifierColor} /> : null }
    </Styled.Container>
  );
};

SidebarDrawerMenu.defaultProps = {
  onClick: undefined
};

export default SidebarDrawerMenu;
