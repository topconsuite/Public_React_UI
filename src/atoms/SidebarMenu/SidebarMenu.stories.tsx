import type { Meta, StoryObj } from "@storybook/react-webpack5";
import iconOptions from "@/helpers/iconOptions";
import SidebarMenu from "./index";

const meta: Meta<typeof SidebarMenu> = {
  title: "Atoms/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true
    }
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "ID único do menu"
    },
    title: {
      control: "text",
      description: "Título do menu (tooltip)"
    },
    icon: iconOptions,
    identifierColor: {
      control: "color",
      description: "Cor do identificador"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "menu-home",
    title: "Home",
    icon: "LogoutAsset"
  }
};

export const DashboardMenu: Story = {
  args: {
    id: "menu-dashboard",
    title: "Dashboard",
    icon: "SettingsAsset",
    identifierColor: "#4CAF50"
  }
};

export const SettingsMenu: Story = {
  args: {
    id: "menu-settings",
    title: "Configurações",
    icon: "EditAsset",
    identifierColor: "#FF9800"
  }
};

export const ProfileMenu: Story = {
  args: {
    id: "menu-profile",
    title: "Perfil do Usuário",
    icon: "CaretRight",
    identifierColor: "#9C27B0"
  }
};
