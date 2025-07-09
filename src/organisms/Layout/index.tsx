import React from "react";
import Navbar from "@molecules/Navbar";
import Sidebar from "@molecules/Sidebar";
import SidebarMenu from "@atoms/SidebarMenu";
import { useTheme } from "@hooks/index";
import { windowWidth } from "@styles/global";
import * as Styled from "./styles";

// Interfaces
interface LayoutProps {
  primaryColor?: string;
  showLogo?: boolean;
  hideSidebarOnMobile?: boolean;
  children?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  navbarProps?: {
    productIconSrc?: string;
    productIconAlt?: string;
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

// Sample content for the main area
const DefaultContent = () => (
  <Styled.ContentArea>
    <h1>Dashboard Principal</h1>
    <p>
      Este é um exemplo de layout completo combinando Navbar e Sidebar.
      O Navbar fica fixo no topo e contém o menu hambúrguer, logo do produto e ícones de ação.
    </p>
    <p>
      A Sidebar fica fixa na lateral esquerda e contém os menus de navegação principal.
      O menu ativo é destacado com ícone branco e identificador colorido.
    </p>
    <p>
      Esta área de conteúdo é scrollável e ocupa o restante do espaço disponível.
      Aqui seria renderizado o conteúdo principal da aplicação baseado na navegação selecionada.
    </p>
  </Styled.ContentArea>
);

// Sample menus for sidebar
const DefaultSidebarContent = (
  <>
    <SidebarMenu
      id="menu-dashboard"
      title="Dashboard"
      icon="ConcreteAsset"
      identifierColor="#ff9900"
      active
    />
    <SidebarMenu
      id="menu-users"
      title="Usuários"
      icon="SettingsAsset"
      identifierColor="#b3bfcb"
    />
    <SidebarMenu
      id="menu-settings"
      title="Configurações"
      icon="EditAsset"
      identifierColor="#b3bfcb"
    />
    <SidebarMenu
      id="menu-reports"
      title="Relatórios"
      icon="LogoutAsset"
      identifierColor="#b3bfcb"
    />
  </>
);

// Layout component
const Layout: React.FC<LayoutProps> = ({
  primaryColor,
  showLogo = true,
  hideSidebarOnMobile = true,
  children,
  sidebarContent,
  navbarProps
}) => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const sidebarColor = primaryColor || theme.colors.primary;

  // Determina se deve mostrar a logo baseado no parâmetro e se é mobile
  const shouldShowLogo = showLogo && !(hideSidebarOnMobile && isMobile);

  // Props do Navbar com controle de exibição da logo
  const navbarPropsWithLogo = {
    ...navbarProps,
    showLogo: shouldShowLogo
  };

  return (
    <Styled.LayoutContainer>
      <Navbar {...navbarPropsWithLogo} />
      <Styled.MainContent hideSidebarOnMobile={hideSidebarOnMobile}>
        <Sidebar primaryColor={sidebarColor}>
          {sidebarContent || DefaultSidebarContent}
        </Sidebar>
        {children || <DefaultContent />}
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
  navbarProps: undefined
};

export default React.memo(Layout);
export type { LayoutProps };
