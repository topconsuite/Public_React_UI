// KanbanAccordionCard.stories.tsx
import React, { useState } from "react";
import { Meta, StoryObj, StoryFn } from "@storybook/react-webpack5";
import { Typography } from "@mui/material";
import { DashboardAsset } from "@assets/applications";
import { Provider } from "jotai";
import KanbanBasicCard from "../KanbanBasicCard";
import KanbanAccordionCard from ".";

// Metadata
const meta: Meta<typeof KanbanAccordionCard> = {
  title: "molecules/KanbanAccordionCard",
  component: KanbanAccordionCard,
  args: {
    children:
  <Typography variant="body2">
    <KanbanBasicCard summaryProps={{
      title1: "Title 1",
      description1: "Description 1",
      primarycolor: "primary",
      iconPath: DashboardAsset
    }}
    />
    <KanbanBasicCard summaryProps={{
      title1: "Title 1",
      description1: "Description 1",
      primarycolor: "primary",
      iconPath: DashboardAsset
    }}
    />
  </Typography>
  }
};

export default meta;

type Story = StoryObj<typeof KanbanAccordionCard>;

// Template com estado controlado
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

// Story padrão
export const Default: Story = {
  render: Template,
  args: {}
};
