import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Provider } from "jotai";
import React from "react";
import { EditAsset, LogoutAsset } from "@/assets/icons";
import { iconOptions } from "@/helpers";
import SidebarDrawerMenu from "./index";

const meta: Meta<typeof SidebarDrawerMenu> = {
  title: "Atoms/SidebarDrawerMenu",
  component: SidebarDrawerMenu,
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    )
  ],
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
      description: "Título do menu"
    },
    icon: iconOptions,
    identifierColor: {
      control: "color",
      description: "Cor do identificador (apenas para tipo primary)"
    },
    secondaryColor: {
      control: "color",
      description: "Cor secundária"
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Tipo do menu"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "drawer-menu-primary",
    title: "Menu Principal",
    icon: EditAsset,
    identifierColor: "#2196F3",
    secondaryColor: "#E3F2FD",
    type: "primary",
    onClick: () => null
  }
};

export const Secondary: Story = {
  args: {
    id: "drawer-menu-secondary",
    title: "Menu Secundário",
    icon: EditAsset,
    identifierColor: "#FF9800",
    secondaryColor: "#FFF3E0",
    type: "secondary",
    onClick: () => null
  }
};

export const WithoutClick: Story = {
  args: {
    id: "drawer-menu-no-click",
    title: "Menu sem Ação",
    icon: LogoutAsset,
    identifierColor: "#9C27B0",
    secondaryColor: "#F3E5F5",
    type: "primary"
  }
};
