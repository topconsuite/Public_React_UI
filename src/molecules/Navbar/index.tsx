import * as React from "react";
import { useCallback, useState } from "react";
import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Phone as PhoneIcon,
  GetApp as GetAppIcon,
  DirectionsCar as VehicleIcon,
  Schedule as ScheduleIcon
} from "@mui/icons-material";

// region Assets
import {
  TopconDispatchLogoAsset
} from "@assets/company/index";
// endregion Assets
// region Hooks
// endregion Hooks
// region Libraries
import { Menu } from "@libraries/mui/icons";
// endregion Libraries
// region Molecules
import DrawerMenu from "@molecules/DrawerMenu";
// endregion Molecules
// region Organisms
import NavbarIcons from "@organisms/NavbarIcons";
import * as packageJson from "../../../package.json";
// endregion Organisms
// region Styles
import * as Styled from "./styles";
// endregion Styles

// region Interfaces
interface NavbarProps {
  productIconSrc?: string;
  productIconAlt?: string;
  showLogo?: boolean;
  user?: {
    name: string;
    email: string;
    admin: boolean;
    super_admin: boolean;
  };
  menus?: Record<string, Array<{
    id: string;
    text: string;
    icon: React.ReactNode;
    link?: string;
    component?: string;
    isPrivate?: boolean;
  }>>;
  version?: string;
  onSignOut?: () => void;
  onHelpClick?: () => void;
  navbarIconsProps?: {
    onNotificationsClick?: () => void;
    onAppsClick?: () => void;
    onSettingsClick?: () => void;
    onLogoutClick?: () => void;
    showLanguageDropdown?: boolean;
    customIcons?: React.ReactNode[];
  };
}
// endregion Interfaces

// Component

const Navbar: React.FC<NavbarProps> = ({
  productIconSrc = TopconDispatchLogoAsset,
  productIconAlt = "Topcon Dispatch icon",
  showLogo = true,
  user,
  menus,
  version,
  onSignOut,
  onHelpClick,
  navbarIconsProps
}) => {

  // region Hooks
  // const { theme } = useTheme();
  // endregion Hooks
  // region States
  const [openSidebar, setOpenSidebar] = useState(false);
  // endregion States
  // region Callbacks / Functions

  /**
   * Toggle open sidebar
   */
  const toggleOpenSidebar = useCallback(() => {
    setOpenSidebar((value) => !value);
  }, []);

  const defaultUser = {
    name: "João Silva",
    email: "joao.silva@empresa.com",
    admin: true,
    super_admin: false
  };

  const defaultMenus = {
    "Principal": [
      {
        id: "dashboard",
        text: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
      },
      {
        id: "vehicles",
        text: "Veículos",
        icon: <VehicleIcon />,
        link: "/vehicles"
      },
      {
        id: "schedule",
        text: "Agendamento",
        icon: <ScheduleIcon />,
        link: "/schedule"
      }
    ],
    "Configurações": [
      {
        id: "users",
        text: "Usuários",
        icon: <PeopleIcon />,
        link: "/users",
        isPrivate: true
      },
      {
        id: "settings",
        text: "Configurações",
        icon: <SettingsIcon />,
        link: "/settings"
      },
      {
        id: "reports",
        text: "Relatórios",
        icon: <AssessmentIcon />,
        link: "/reports"
      }
    ],
    "Suporte": [
      {
        id: "contact",
        text: "Fale Conosco",
        icon: <PhoneIcon />,
        component: "modalContactUs"
      },
      {
        id: "install",
        text: "Instalar App",
        icon: <GetAppIcon />,
        component: "installPWA"
      }
    ]
  };

  const currentUser = user || defaultUser;
  const currentMenus = menus || defaultMenus;
  const currentVersion = version || packageJson.version;
  const handleSignOut = onSignOut || (() => {
    // console.log("Sign out clicked");
    setOpenSidebar(false);
  });
  const handleHelpClick = onHelpClick || (() => {
    // console.log("Help clicked");
  });

  // endregion Callbacks / Functions

  return (
    <Styled.Container>
      <Menu onClick={toggleOpenSidebar} />
      <DrawerMenu
        open={openSidebar}
        onClose={toggleOpenSidebar}
        user={currentUser}
        menus={currentMenus}
        version={currentVersion}
        onSignOut={handleSignOut}
        onHelpClick={handleHelpClick}
      />
      {showLogo && (
        <Styled.Product>
          <Styled.ProductIcon src={productIconSrc} alt={productIconAlt} />
          <Styled.Version>
            v
            {currentVersion}
          </Styled.Version>
        </Styled.Product>
      )}
      <NavbarIcons {...navbarIconsProps} />

    </Styled.Container>
  );
};

Navbar.defaultProps = {
  productIconSrc: TopconDispatchLogoAsset,
  productIconAlt: "Topcon Dispatch icon",
  showLogo: true
};

export default React.memo(Navbar);
