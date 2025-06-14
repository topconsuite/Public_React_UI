import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AccordionCard from ".";
// Linha 3: Corrigir de:
// import 'src/atoms/KanbanBasicCard/index';
// Para:
import "@molecules/KanbanBasicCard";

const meta: Meta<typeof AccordionCard> = {
  title: "Molecules/AccordionCard",
  component: AccordionCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    accordionSummary: {
      control: "text",
      description: "Conteúdo do cabeçalho do acordeão"
    },
    children: {
      control: "text",
      description: "Conteúdo do corpo do acordeão"
    },
    showExpandIcon: {
      control: "boolean",
      description: "Mostrar ícone de expansão"
    },
    expanded: {
      control: "boolean",
      description: "Estado de expansão do acordeão"
    },
    onChange: {
      action: "changed",
      description: "Manipulador de eventos de alteração"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accordionSummary: "Título do Acordeão",
    children: "Conteúdo do acordeão vai aqui",
    expanded: false,
    showExpandIcon: true
  }
};

export const Expanded: Story = {
  args: {
    accordionSummary: "Acordeão Expandido",
    children: "Este acordeão está expandido por padrão",
    expanded: true,
    showExpandIcon: true
  }
};

export const WithoutExpandIcon: Story = {
  args: {
    accordionSummary: "Sem Ícone de Expansão",
    children: "Este acordeão não possui ícone de expansão",
    expanded: false,
    showExpandIcon: false
  }
};

export const WithJSXContent: Story = {
  args: {
    accordionSummary: "",
    expanded: true,
    showExpandIcon: true
  }
};
