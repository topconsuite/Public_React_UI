import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Form } from "@unform/web";
import React from "react";
import TextField from "./index";

type TextFieldStoryProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
};

const meta: Meta<TextFieldStoryProps> = {
  title: "Atoms/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <Form onSubmit={() => {}}>
        <Story />
      </Form>
    )
  ],
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
      description: {
        component: "Campo de texto integrado com Unform para formulários."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Nome do campo (obrigatório para Unform)"
    },
    label: {
      control: "text",
      description: "Label do campo"
    },
    placeholder: {
      control: "text",
      description: "Placeholder do campo"
    },
    helperText: {
      control: "text",
      description: "Texto de ajuda"
    },
    defaultValue: {
      control: "text",
      description: "Valor padrão"
    },
    disabled: {
      control: "boolean",
      description: "Campo desabilitado"
    },
    required: {
      control: "boolean",
      description: "Campo obrigatório"
    },
    multiline: {
      control: "boolean",
      description: "Campo de múltiplas linhas"
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Tipo do input"
    }
  }
};

export default meta;
type Story = StoryObj<TextFieldStoryProps>;

export const Default: Story = {
  args: {
    name: "defaultField",
    label: "Campo Padrão",
    placeholder: "Digite algo..."
  }
};

export const WithHelperText: Story = {
  args: {
    name: "fieldWithHelper",
    label: "Campo com Ajuda",
    placeholder: "Digite seu email",
    helperText: "Insira um email válido",
    type: "email"
  }
};

export const Required: Story = {
  args: {
    name: "requiredField",
    label: "Campo Obrigatório",
    placeholder: "Campo obrigatório",
    required: true
  }
};

export const Disabled: Story = {
  args: {
    name: "disabledField",
    label: "Campo Desabilitado",
    defaultValue: "Valor fixo",
    disabled: true
  }
};

export const Password: Story = {
  args: {
    name: "passwordField",
    label: "Senha",
    type: "password",
    placeholder: "Digite sua senha"
  }
};

export const Multiline: Story = {
  args: {
    name: "multilineField",
    label: "Comentários",
    placeholder: "Digite seus comentários...",
    multiline: true
  }
};

export const WithDefaultValue: Story = {
  args: {
    name: "fieldWithDefault",
    label: "Campo com Valor Padrão",
    defaultValue: "Valor inicial"
  }
};
