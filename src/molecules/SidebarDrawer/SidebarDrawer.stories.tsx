import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Provider } from "jotai";
import React from "react";
import SidebarDrawer from "./index";
import SidebarDrawerMenu from "../../atoms/SidebarDrawerMenu";

const meta: Meta<typeof SidebarDrawer> = {
  title: "Molecules/SidebarDrawer",
  component: SidebarDrawer,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    )
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      autodocs: true,
      description: {
        component: "Drawer lateral com header, body e footer customizáveis."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    anchor: {
      control: { type: "select" },
      options: ["left", "top", "right", "bottom"],
      description: "Posição do drawer"
    },
    primarycolor: {
      control: "color",
      description: "Cor primária do drawer"
    },
    productIconPath: {
      control: "text",
      description: "Caminho do ícone do produto"
    },
    productIconFallbackPath: {
      control: "text",
      description: "Caminho do ícone de fallback"
    },
    productIconClass: {
      control: "text",
      description: "Classe CSS do ícone"
    },
    open: {
      control: "boolean",
      description: "Estado aberto/fechado"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleBodyMenus = (
  <>
    <SidebarDrawerMenu
      id="drawer-menu-1"
      title="Dashboard"
      icon=""
      identifierColor="#2196F3"
      secondaryColor="#E3F2FD"
      type="primary"
    />
    <SidebarDrawerMenu
      id="drawer-menu-2"
      title="Usuários"
      icon=""
      identifierColor="#4CAF50"
      secondaryColor="#E8F5E8"
      type="primary"
    />
    <SidebarDrawerMenu
      id="drawer-menu-3"
      title="Configurações"
      icon=""
      identifierColor="#F44336"
      secondaryColor="#EFEBE9"
      type="primary"
    />

  </>
);

export const Deafult: Story = {
  args: {
    children: SampleBodyMenus
  }
};
