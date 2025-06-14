import React from "react";
import SidebarDrawerMenu from "../../atoms/SidebarDrawerMenu";
import useTheme from "../../hooks/useTheme";

const secondaryMenuItems = [
  {
    id: "logout",
    title: "Sair",
    icon: "/path/to/logout-icon.svg"
  }
];

const SidebarDrawerSecondaryMenus: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      {
        secondaryMenuItems.map(({ id, title, icon }) => (
          <SidebarDrawerMenu
            key={`${id}_${title}`}
            id={id}
            title={title}
            icon={icon}
            secondaryColor={theme.colors.secondary}
            identifierColor={theme.colors.tertiary}
            type="secondary"
          />
        ))
      }
    </>
  );
};

export default React.memo(SidebarDrawerSecondaryMenus);
