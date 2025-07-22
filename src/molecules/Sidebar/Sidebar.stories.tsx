import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import { useTheme } from "@/hooks";
import Sidebar from "./index";
import SidebarMenu from "../../atoms/SidebarMenu";

const meta: Meta<typeof Sidebar> = {
  title: "Molecules/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
      description: {
        component: "Container de sidebar que organiza menus laterais."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    primaryColor: {
      control: "color",
      description: "Cor primária da sidebar"
    },
    children: {
      control: false,
      description: "Elementos filhos (menus)"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleMenus = (
  <>
    <SidebarMenu
      id="menu-1"
      title="Dashboard"
      icon="ConcreteAsset"
      identifierColor="#ff9900"
      active
    />
    <SidebarMenu
      id="menu-2"
      title="Usuários"
      icon="SettingsAsset"
      identifierColor="#b3bfcb"
    />
    <SidebarMenu
      id="menu-3"
      title="Configurações"
      icon="EditAsset"
      identifierColor="#b3bfcb"
    />
  </>
);

const SidebarWithTheme = (args: { children?: React.ReactNode }) => {
  const { theme } = useTheme();

  return <Sidebar {...args} primaryColor={theme.colors.primary} />;
};

export const Default: Story = {
  render: (args) => <SidebarWithTheme {...args} />,
  args: {
    children: SampleMenus
  }
};
