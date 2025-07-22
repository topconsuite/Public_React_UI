import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { iconOptions } from "@/helpers";
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
    icon: {
      control: { type: "select" },
      options: iconOptions.options,
      description: iconOptions.description
    },

    active: {
      control: "boolean",
      description: "Define se o menu está ativo/selecionado"
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
    icon: "SettingsAsset"

  }
};

export const SettingsMenu: Story = {
  args: {
    id: "menu-settings",
    title: "Configurações",
    icon: "EditAsset"

  }
};

export const ProfileMenu: Story = {
  args: {
    id: "menu-profile",
    title: "Perfil do Usuário",
    icon: "CaretRight"

  }
};

export const ActiveMenu: Story = {
  args: {
    id: "menu-active",
    title: "Menu Ativo",
    icon: "SettingsAsset",

    active: true
  }
};
