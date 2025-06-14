import React from "react";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Grid, Box } from "@mui/material";
import { Provider } from "jotai";
import KanbanAccordionCard from "../../molecules/KanbanAccordionCard";
import KanbanBasicCard from "../../molecules/KanbanBasicCard";

// Remova esta linha se não estiver usando
// import '@store';

const KanbanBoard = () => {
  const kanbanData = [
    {
      id: "automatico",
      title: "Automático",
      color: "#4CAF50",
      cards: [
        {
          title1: "P4 - Ponto 1",
          description1: "Regional: Norte",
          description2: "Central: São Paulo 1",
          description3: "Endereço: São Paulo",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 0,
          maintenanceDaysLeft: 6,
          concreteProduction: "45m³"
        },
        {
          title1: "P2 - Ponto 2",
          description1: "Regional: Sul",
          description2: "Central: Rio Grande do Sul 1",
          description3: "Endereço: Porto Alegre",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 15,
          maintenanceDaysLeft: 12,
          concreteProduction: "38m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Regional: Sudeste",
          description2: "Central: Minas Gerais 1",
          description3: "Endereço: Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        }
      ]
    },
    {
      id: "standby",
      title: "Standby",
      color: "#FF9800",
      cards: [
        {
          title1: "P3 - Ponto 1",
          description1: "Regional: Nordeste",
          description2: "Central: Bahia 2",
          description3: "Endereço: Salvador",
          primarycolor: "#FF9800",
          timeInStatusMinutes: 18,
          maintenanceDaysLeft: 3,
          concreteProduction: "12m³"
        },
        {
          title1: "P6 - Ponto 2",
          description1: "Regional: Centro-Oeste",
          description2: "Central: Goiás 1",
          description3: "Endereço: Goiânia",
          primarycolor: "#FF9800",
          timeInStatusMinutes: 22,
          maintenanceDaysLeft: null,
          concreteProduction: "28m³"
        },
        {
          title1: "P8 - Ponto 1",
          description1: "Regional: Sul",
          description2: "Central: Santa Catarina 1",
          description3: "Endereço: Florianópolis",
          primarycolor: "#FF9800",
          timeInStatusMinutes: 12,
          maintenanceDaysLeft: 2,
          concreteProduction: "35m³"
        }
      ]
    },
    {
      id: "manual",
      title: "Manual",
      color: "#F44336",
      cards: [
        {
          title1: "P5 - Ponto 2",
          description1: "Regional: Sudeste",
          description2: "Central: Rio de Janeiro 1",
          description3: "Endereço: Rio de Janeiro",
          primarycolor: "#F44336",
          timeInStatusMinutes: 35,
          maintenanceDaysLeft: -3,
          concreteProduction: "22m³"
        },
        {
          title1: "P1 - Ponto 1",
          description1: "Regional: Centro-Oeste",
          description2: "Central: Mato Grosso 1",
          description3: "Endereço: Cuiabá",
          primarycolor: "#F44336",
          timeInStatusMinutes: 28,
          maintenanceDaysLeft: -1,
          concreteProduction: "18m³"
        },
        {
          title1: "P4 - Ponto 2",
          description1: "Regional: Norte",
          description2: "Central: Amazonas 1",
          description3: "Endereço: Manaus",
          primarycolor: "#F44336",
          timeInStatusMinutes: 42,
          maintenanceDaysLeft: null,
          concreteProduction: "30m³"
        }
      ]
    }
  ];

  return (
    <Provider>
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={3}>
          {kanbanData.map((section) => (
            <Grid item xs={12} md={4} key={section.id}>
              <KanbanAccordionCard
                title={section.title}
                count={section.cards.length}
                color={section.color}
              >
                {section.cards.map((card) => (
                  <Box key={`${section.id}-${card.title1}-${card.description1}`} sx={{ marginBottom: 1 }}>
                    <KanbanBasicCard summaryProps={card} />
                  </Box>
                ))}
              </KanbanAccordionCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Provider>
  );
};

const meta: Meta = {
  title: "organisms/Kanban",
  component: KanbanBoard,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof KanbanBoard>;

export const StatusEquipamentos: Story = {
  render: () => <KanbanBoard />
};
