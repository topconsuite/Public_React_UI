import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
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
      icon=""
      identifierColor="#2196F3"
    />
    <SidebarMenu
      id="menu-2"
      title="Usuários"
      icon=""
      identifierColor="#4CAF50"
    />
    <SidebarMenu
      id="menu-3"
      title="Configurações"
      icon=""
      identifierColor="#FF9800"
    />
  </>
);

export const Default: Story = {
  args: {
    primaryColor: "#1976D2",
    children: SampleMenus
  }
};

export const DarkTheme: Story = {
  args: {
    primaryColor: "#212121",
    children: SampleMenus
  }
};

export const GreenTheme: Story = {
  args: {
    primaryColor: "#388E3C",
    children: SampleMenus
  }
};

export const PurpleTheme: Story = {
  args: {
    primaryColor: "#7B1FA2",
    children: SampleMenus
  }
};
