import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import Tooltip from "./index";
import Button from "../Button";

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Componente de tooltip customizado baseado no Material-UI."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "<Button />" }
      },
      description: "Elemento que será envolvido pelo tooltip"
    },
    title: {
      control: "text",
      description: "Texto do tooltip"
    },
    position: {
      control: { type: "select" },
      options: [
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top"
      ],
      description: "Posição do tooltip"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    title: "Tooltip no topo",
    position: "top",
    children: <Button text="Hover para ver tooltip" />
  }
};

export const Bottom: Story = {
  args: {
    title: "Tooltip na parte inferior",
    position: "bottom",
    children: <Button text="Hover para ver tooltip" />
  }
};

export const Left: Story = {
  args: {
    title: "Tooltip à esquerda",
    position: "left",
    children: <Button text="Hover para ver tooltip" />
  }
};

export const Right: Story = {
  args: {
    title: "Tooltip à direita",
    position: "right",
    children: <Button text="Hover para ver tooltip" />
  }
};

export const TopStart: Story = {
  args: {
    title: "Tooltip no topo (início)",
    position: "top-start",
    children: <Button text="Hover para ver tooltip" />
  }
};

export const TopEnd: Story = {
  args: {
    title: "Tooltip no topo (fim)",
    position: "top-end",
    children: <Button text="Hover para ver tooltip" />
  }
};

export const LongText: Story = {
  args: {
    title: "Este é um tooltip com texto muito longo para demonstrar como ele se comporta com conteúdo extenso",
    position: "top",
    children: <Button text="Tooltip com texto longo" />
  }
};
