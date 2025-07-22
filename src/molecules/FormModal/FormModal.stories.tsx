import type { Meta, StoryObj } from "@storybook/react-webpack5";
import React, { useState } from "react";
import FormModal from "./index";
import { FormModalField } from "./types";
import { TextField, Button } from "../../atoms";

const meta: Meta<typeof FormModal> = {
  title: "Molecules/FormModal",
  component: FormModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Componente de modal de formulário reutilizável para criação, edição e visualização de dados."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controla se o modal está aberto ou fechado"
    },
    mode: {
      control: "select",
      options: ["create", "edit", "view"],
      description: "Modo do formulário: criar, editar ou visualizar"
    },
    title: {
      control: "text",
      description: "Título do modal"
    },
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Largura máxima do modal"
    },
    fullWidth: {
      control: "boolean",
      description: "Se o modal deve ocupar toda a largura disponível"
    },
    loading: {
      control: "boolean",
      description: "Estado de carregamento do formulário"
    }
  }
};

export default meta;
type Story = StoryObj<typeof FormModal>;

const ComplexFormComponent = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fields: FormModalField[] = [
    {
      component: (
        <TextField
          name="companyName"
          label="Nome da Empresa"
          variant="outlined"
          margin="dense"
          helperText="Campo obrigatório"
          required
        />
      ),
      gridProps: { xs: 12, md: 8 }
    },
    {
      component: (
        <TextField
          name="cnpj"
          label="CNPJ"
          variant="outlined"
          margin="dense"
          helperText="Apenas números"
        />
      ),
      gridProps: { xs: 12, md: 4 }
    },
    {
      component: (
        <TextField
          name="address"
          label="Endereço"
          variant="outlined"
          margin="dense"
        />
      ),
      gridProps: { xs: 12, md: 8 }
    },
    {
      component: (
        <TextField
          name="number"
          label="Número"
          variant="outlined"
          margin="dense"
          type="number"
        />
      ),
      gridProps: { xs: 12, md: 4 }
    },
    {
      component: (
        <TextField
          name="city"
          label="Cidade"
          variant="outlined"
          margin="dense"
        />
      ),
      gridProps: { xs: 12, md: 6 }
    },
    {
      component: (
        <TextField
          name="state"
          label="Estado"
          variant="outlined"
          margin="dense"
        />
      ),
      gridProps: { xs: 12, md: 3 }
    },
    {
      component: (
        <TextField
          name="zipCode"
          label="CEP"
          variant="outlined"
          margin="dense"
        />
      ),
      gridProps: { xs: 12, md: 3 }
    },
    {
      component: (
        <TextField
          name="observations"
          label="Observações"
          variant="outlined"
          margin="dense"
          multiline
          rows={4}
        />
      ),
      gridProps: { xs: 12 }
    }
  ];

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      // Form submitted successfully
      setLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        text="Cadastrar Empresa"
      />

      <FormModal
        open={open}
        onClose={() => setOpen(false)}
        title="Cadastro de Empresa"
        mode="create"
        onSubmit={handleSubmit}
        fields={fields}
        loading={loading}
        maxWidth="lg"
        submitButtonText="Cadastrar Empresa"
        containerProps={{ id: "complex-form-modal" }}
      />
    </div>
  );
};

export const ComplexForm: Story = {
  render: ComplexFormComponent
};
