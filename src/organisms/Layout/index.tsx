import React from "react";
import Navbar from "@molecules/Navbar";
import Sidebar from "@molecules/Sidebar";
import SidebarMenu from "@atoms/SidebarMenu";
import { useTheme } from "@hooks/index";
import { windowWidth } from "@styles/global";
import * as Styled from "./styles";

// Interfaces para os menus
interface MenuItem {
  id: string;
  text: string;
  icon: React.ReactNode;
  iconMobile?: React.ReactNode;
  link?: string;
  component?: string;
  isPrivate?: boolean;
  isSuperPrivate?: boolean;
  iconName?: string; // Para compatibilidade com SidebarMenu

  active?: boolean; // Para SidebarMenu
}

interface MenuSection {
  [key: string]: MenuItem[];
}

interface LayoutProps {
  primaryColor?: string;
  showLogo?: boolean;
  hideSidebarOnMobile?: boolean;
  children?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  menus?: MenuSection; // Nova propriedade para menus unificados
  onMenuItemClick?: (menu: MenuItem) => void; // Callback para cliques nos itens
  currentPath?: string; // Rota atual para determinar item ativo
  navbarProps?: {
    productIconSrc?: string;
    productIconAlt?: string;
    showLogo?: boolean;
    user?: {
      name: string;
      email: string;
      admin: boolean;
      super_admin: boolean;
    };
    menus?: MenuSection; // Atualizado para usar MenuSection
    version?: string;
    onSignOut?: () => void;
    onHelpClick?: () => void;
    userPhotoSrc?: string;
  };
  navbarIconsProps?: {
    onNotificationsClick?: () => void;
    onAppsClick?: () => void;
    onSettingsClick?: () => void;
    onLogoutClick?: () => void;
    showLanguageDropdown?: boolean;
    customIcons?: React.ReactNode[];
  };
  sidebarProps?: {
    primaryColor?: string;
  };
}

// Hook para detectar se é mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= parseInt(windowWidth.tablet, 10));
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

// Função para converter menus do formato DrawerMenu para SidebarMenu
const convertMenusToSidebarContent = (menus: MenuSection, onMenuItemClick?: (menu: MenuItem) => void, currentPath?: string) => {
  const allMenuItems: MenuItem[] = [];

  // Flatten all menu items from all sections
  Object.keys(menus).forEach((sectionKey) => {
    allMenuItems.push(...menus[sectionKey]);
  });

  return (
    <>
      {allMenuItems.map((menuItem, index) => {
        // Determina se o item está ativo baseado na rota atual
        const isActive = currentPath
          ? (menuItem.link === currentPath)
          : (menuItem.active || index === 0); // Fallback para primeiro item se não há rota atual

        return (
          <SidebarMenu
            key={menuItem.id}
            id={menuItem.id}
            title={menuItem.text}
            icon={menuItem.iconName || "default"} // Fallback para ícone padrão
            active={isActive}
            onClick={() => onMenuItemClick && onMenuItemClick(menuItem)}
          />
        );
      })}
    </>
  );
};

// Layout component
const Layout: React.FC<LayoutProps> = ({
  primaryColor,
  showLogo = true,
  hideSidebarOnMobile = true,
  children,
  sidebarContent,
  menus,
  onMenuItemClick,
  currentPath,
  navbarProps,
  navbarIconsProps,
  sidebarProps
}) => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const sidebarColor = sidebarProps?.primaryColor || primaryColor || theme.colors.primary;

  // Determina se deve mostrar a logo baseado no parâmetro e se é mobile
  const shouldShowLogo = (navbarProps?.showLogo ?? showLogo) && !(hideSidebarOnMobile && isMobile);

  // Props do Navbar com controle de exibição da logo e menus
  const navbarPropsWithLogo = {
    ...navbarProps,
    showLogo: shouldShowLogo,
    menus: menus || navbarProps?.menus, // Usa menus do Layout ou do navbarProps
    onMenuItemClick
  };

  // Determina o conteúdo da sidebar
  const sidebarContentToRender = sidebarContent
    || (menus ? convertMenusToSidebarContent(menus, onMenuItemClick, currentPath) : null);

  return (
    <Styled.LayoutContainer>
      <Navbar {...navbarPropsWithLogo} navbarIconsProps={navbarIconsProps} />
      <Styled.MainContent hideSidebarOnMobile={hideSidebarOnMobile}>
        <Sidebar primaryColor={sidebarColor}>
          {sidebarContentToRender}
        </Sidebar>
        {children}
      </Styled.MainContent>
    </Styled.LayoutContainer>
  );
};

Layout.defaultProps = {
  primaryColor: undefined,
  showLogo: true,
  hideSidebarOnMobile: true,
  children: undefined,
  sidebarContent: undefined,
  menus: undefined,
  onMenuItemClick: undefined,
  currentPath: undefined,
  navbarProps: undefined,
  navbarIconsProps: undefined,
  sidebarProps: undefined
};

export default React.memo(Layout);
export type { LayoutProps, MenuItem, MenuSection };
