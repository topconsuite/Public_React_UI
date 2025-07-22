import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React from "react";
import Toast from "./index";
import { ToastProvider } from "../../hooks/useToast/useToast";

const meta: Meta<typeof Toast> = {
  title: "Atoms/Toast",
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ],
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
      description: {
        component: "Componente de notificação toast com diferentes tipos e auto-dismiss."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "object",
      description: "Objeto da mensagem do toast"
    },
    style: {
      control: "object",
      description: "Estilos customizados"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: {
      id: "1",
      type: "success",
      title: "Sucesso!",
      description: "Operação realizada com sucesso.",
      duration: 5000
    },
    style: {}
  }
};

export const Error: Story = {
  args: {
    message: {
      id: "2",
      type: "error",
      title: "Erro!",
      description: "Ocorreu um erro durante a operação.",
      duration: 5000
    },
    style: {}
  }
};

export const Info: Story = {
  args: {
    message: {
      id: "3",
      type: "info",
      title: "Informação",
      description: "Esta é uma mensagem informativa.",
      duration: 5000
    },
    style: {}
  }
};

export const WithoutDescription: Story = {
  args: {
    message: {
      id: "4",
      type: "success",
      title: "Título apenas",
      duration: 3000
    },
    style: {}
  }
};

export const LongDuration: Story = {
  args: {
    message: {
      id: "5",
      type: "info",
      title: "Mensagem Persistente",
      description: "Esta mensagem ficará visível por mais tempo.",
      duration: 10000
    },
    style: {}
  }
};

export const WithHTMLDescription: Story = {
  args: {
    message: {
      id: "6",
      type: "info",
      title: "Mensagem com HTML",
      description: "Esta mensagem contém <strong>texto em negrito</strong> e <em>texto em itálico</em>.",
      duration: 5000
    },
    style: {}
  }
};
