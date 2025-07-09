import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Box } from "@mui/material";
import React from "react";
import AccordionCard from "@/molecules/AccordionCard";
import ActionsCardKanban from "./index";

const meta: Meta<typeof ActionsCardKanban> = {
  title: "Atoms/ActionsCardKanban",
  component: ActionsCardKanban,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    onReportsClick: { action: "reports clicked" },
    onChartsClick: { action: "charts clicked" },
    onMaintenanceClick: { action: "maintenance clicked" },
    onHistoryClick: { action: "history clicked" },
    disabled: {
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false
  },
  render: (args) => (
    <Box sx={{ width: 300, p: 2 }}>
      <ActionsCardKanban {...args} />
    </Box>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => (
    <Box sx={{ width: 300, p: 2 }}>
      <ActionsCardKanban {...args} />
    </Box>
  )
};

export const WithinAccordionCard: Story = {
  args: {
    disabled: false
  },
  render: (args) => {
    const WithinAccordionCardComponent = () => (
      <Box sx={{ width: 500, p: 2 }}>
        <AccordionCard
          title="Ações do Kanban"
          subtitle="Clique para expandir e ver as ações disponíveis"
          expanded
          showExpandIcon
        >
          <ActionsCardKanban {...args} />
        </AccordionCard>
      </Box>
    );

    return <WithinAccordionCardComponent />;
  }
};
