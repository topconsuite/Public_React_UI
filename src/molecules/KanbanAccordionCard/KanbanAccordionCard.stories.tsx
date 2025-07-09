import React, { useState } from "react";
import { Meta, StoryObj, StoryFn } from "@storybook/react-webpack5";
import { Typography, Box, Chip } from "@mui/material";
import { DashboardAsset } from "@assets/applications";
import { Provider } from "jotai";
import KanbanBasicCard from "../KanbanBasicCard";
import KanbanAccordionCard from ".";

const meta: Meta<typeof KanbanAccordionCard> = {
  title: "molecules/KanbanAccordionCard",
  component: KanbanAccordionCard,
  parameters: {
    layout: "padded",
    docs: {
      autodocs: true,
      description: {
        component: "Componente de accordion para exibir cards Kanban com título, contador e conteúdo expansível. Ideal para organizar e agrupar itens em dashboards."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title displayed in the accordion header"
    },
    count: {
      control: { type: "number" },
      description: "The count number displayed next to the title"
    },
    color: {
      control: { type: "color" },
      description: "The primary color for the accordion card"
    },
    accordionSummary: {
      control: { type: "object" },
      description: "Custom content for the accordion summary"
    },
    children: {
      control: { type: "object" },
      description: "Content to be displayed inside the accordion"
    },
    expanded: {
      control: { type: "boolean" },
      description: "Controls whether the accordion is expanded (controlled mode)"
    },
    onChange: {
      action: "expanded changed",
      description: "Callback function called when accordion expansion state changes"
    }
  },
  args: {
    title: "Tarefas",
    count: 5,
    color: "#6a4dc3",
    children: (
      <Typography variant="body2">
        <KanbanBasicCard summaryProps={{
          title1: "Tarefa 1",
          description1: "Descrição da primeira tarefa",
          primarycolor: "primary",
          iconPath: DashboardAsset
        }}
        />
        <KanbanBasicCard summaryProps={{
          title1: "Tarefa 2",
          description1: "Descrição da segunda tarefa",
          primarycolor: "primary",
          iconPath: DashboardAsset
        }}
        />
      </Typography>
    )
  }
};

export default meta;

type Story = StoryObj<typeof KanbanAccordionCard>;

const Template = ({ onChange, ...args }: StoryFn<typeof KanbanAccordionCard>) => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = (isExpanded: boolean) => {
    setExpanded(isExpanded);
    onChange?.(isExpanded);
  };

  return (
    <Provider>
      <KanbanAccordionCard
        {...args}
        expanded={expanded}
        onChange={handleChange}

      />
    </Provider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    title: "Em Progresso",
    count: 3,
    color: "#2196f3"
  }
};

export const EmptyState: Story = {
  render: Template,
  args: {
    title: "Concluídas",
    count: 0,
    color: "#4caf50",
    children: (
      <Box sx={{ padding: 2, textAlign: "center", color: "#757575" }}>
        <Typography variant="body2">
          Nenhuma tarefa concluída ainda
        </Typography>
      </Box>
    )
  }
};

export const HighCount: Story = {
  render: Template,
  args: {
    title: "Pendentes",
    count: 25,
    color: "#ff9800",
    children: (
      <Box sx={{ padding: 1 }}>
        {Array.from({ length: 5 }, (_, index) => (
          <KanbanBasicCard
            key={index}
            summaryProps={{
              title1: `Tarefa ${index + 1}`,
              description1: `Descrição da tarefa pendente ${index + 1}`,
              primarycolor: "warning",
              iconPath: DashboardAsset
            }}
          />
        ))}
      </Box>
    )
  }
};

export const CustomColors: Story = {
  render: Template,
  args: {
    title: "Urgentes",
    count: 7,
    color: "#f44336",
    children: (
      <Box sx={{ padding: 1 }}>
        <KanbanBasicCard summaryProps={{
          title1: "Tarefa Crítica",
          description1: "Esta tarefa precisa ser resolvida imediatamente",
          primarycolor: "error",
          iconPath: DashboardAsset
        }}
        />
        <KanbanBasicCard summaryProps={{
          title1: "Bug Crítico",
          description1: "Correção urgente necessária",
          primarycolor: "error",
          iconPath: DashboardAsset
        }}
        />
      </Box>
    )
  }
};

export const CustomHeader: Story = {
  render: Template,
  args: {
    accordionSummary: (
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "16px 32px"
      }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Sprint Atual
          </Typography>
          <Chip
            label="Ativo"
            size="small"
            sx={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              fontWeight: "bold"
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
            12/15 concluídas
          </Typography>
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
            15
          </Typography>
        </Box>
      </Box>
    ),
    color: "#9c27b0",
    children: (
      <Box sx={{ padding: 1 }}>
        <KanbanBasicCard summaryProps={{
          title1: "Feature A",
          description1: "Implementação da nova funcionalidade",
          primarycolor: "primary",
          iconPath: DashboardAsset
        }}
        />
        <KanbanBasicCard summaryProps={{
          title1: "Refatoração",
          description1: "Melhoria do código existente",
          primarycolor: "secondary",
          iconPath: DashboardAsset
        }}
        />
      </Box>
    )
  }
};

export const DarkTheme: Story = {
  args: {
    title: "Dark Theme",
    count: 8,
    color: "#2d3748",
    children: (
      <Box sx={{ p: 2 }}>
        <KanbanBasicCard
          summaryProps={{
            title1: "Dark Card 1",
            description1: "Card in dark theme",
            primarycolor: "#ef4444"
          }}
        />
        <KanbanBasicCard
          summaryProps={{
            title1: "Dark Card 2",
            description1: "Another dark card",
            primarycolor: "#f59e0b"
          }}
        />
      </Box>
    )
  },
  parameters: {
    backgrounds: { default: "dark" }
  }
};

export const ControlledExpanded: Story = {
  args: {
    title: "Controlled Accordion",
    count: 5,
    color: "#10b981",
    expanded: true,
    children: (
      <Box sx={{ p: 2 }}>
        <KanbanBasicCard
          summaryProps={{
            title1: "Controlled Card",
            description1: "This accordion is controlled by the expanded prop",
            primarycolor: "#10b981"
          }}
        />
      </Box>
    )
  }
};

export const ControlledCollapsed: Story = {
  args: {
    title: "Controlled Collapsed",
    count: 3,
    color: "#f59e0b",
    expanded: false,
    children: (
      <Box sx={{ p: 2 }}>
        <KanbanBasicCard
          summaryProps={{
            title1: "Hidden Card",
            description1: "This content is initially collapsed",
            primarycolor: "#6b7280"
          }}
        />
      </Box>
    )
  }
};
