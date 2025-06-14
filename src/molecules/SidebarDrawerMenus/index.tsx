import React from "react";
import SidebarDrawerMenu from "../../atoms/SidebarDrawerMenu";
import useTheme from "../../hooks/useTheme";

// Dados de exemplo para os menus
const menuItems = [
  {
    id: "1",
    title: "Dashboard",
    icon: "/path/to/dashboard-icon.svg"
  },
  {
    id: "2",
    title: "Veículos",
    icon: "/path/to/vehicles-icon.svg"
  },
  {
    id: "3",
    title: "Agendamento",
    icon: "/path/to/schedule-icon.svg"
  }
];

const SidebarDrawerMenus: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      {
        menuItems.map(({ id, title, icon }) => (
          <SidebarDrawerMenu
            key={`${id}_${title}`}
            id={id}
            title={title}
            icon={icon}
            secondaryColor={theme.colors.secondary}
            identifierColor={theme.colors.tertiary}
            type="primary"
          />
        ))
      }
    </>
  );
};

export default React.memo(SidebarDrawerMenus);
