import React from "react";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Grid, Box } from "@mui/material";
import { Provider } from "jotai";
import { I18nextProvider } from "react-i18next";
import KanbanAccordionCard from "../../molecules/KanbanAccordionCard";
import KanbanBasicCard from "../../molecules/KanbanBasicCard";
import i18n from "../../languages/i18n";

const KanbanBoard = () => {
  const kanbanData = [
    {
      id: "automatico",
      title: "Automático",
      color: "#4CAF50",
      cards: [
        {
          title1: "P4 - Ponto 1",
          description1: "Norte",
          description2: "São Paulo 1",
          description3: "São Paulo",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 0,
          maintenanceDaysLeft: 6,
          concreteProduction: "45m³"
        },
        {
          title1: "P2 - Ponto 2",
          description1: "Sul",
          description2: "Rio Grande do Sul 1",
          description3: "Porto Alegre",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 15,
          maintenanceDaysLeft: 12,
          concreteProduction: "38m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
          primarycolor: "#4CAF50",
          timeInStatusMinutes: 5,
          maintenanceDaysLeft: 8,
          concreteProduction: "52m³"
        },
        {
          title1: "P1 - Ponto 3",
          description1: "Sudeste",
          description2: "Minas Gerais 1",
          description3: "Belo Horizonte",
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
          description1: "Nordeste",
          description2: "Bahia 2",
          description3: "Salvador",
          primarycolor: "#FF9800",
          timeInStatusMinutes: 18,
          maintenanceDaysLeft: 3,
          concreteProduction: "12m³"
        },
        {
          title1: "P6 - Ponto 2",
          description1: "Centro-Oeste",
          description2: "Goiás 1",
          description3: "Goiânia",
          primarycolor: "#FF9800",
          timeInStatusMinutes: 22,
          maintenanceDaysLeft: null,
          concreteProduction: "28m³"
        },
        {
          title1: "P8 - Ponto 1",
          description1: "Sul",
          description2: "Santa Catarina 1",
          description3: "Florianópolis",
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
          description1: "Rio de Janeiro",
          description2: "Rio de Janeiro",
          description3: "Av. Atlântica, 1702",
          primarycolor: "#F44336",
          timeInStatusMinutes: 35,
          maintenanceDaysLeft: -3,
          concreteProduction: "22m³"
        },
        {
          title1: "P1 - Ponto 1",
          description1: "Mato Grosso",
          description2: "Cuiabá",
          description3: "Av. Fernando Corrêa, 1000",
          primarycolor: "#F44336",
          timeInStatusMinutes: 28,
          maintenanceDaysLeft: -1,
          concreteProduction: "18m³"
        },
        {
          title1: "P4 - Ponto 2",
          description1: "Amazonas",
          description2: "Manaus",
          description3: "Av. Eduardo Ribeiro, 620",
          primarycolor: "#F44336",
          timeInStatusMinutes: 42,
          maintenanceDaysLeft: null,
          concreteProduction: "30m³"
        }
      ]
    }
  ];

  return (
    <I18nextProvider i18n={i18n}>
      <Provider>
        <Box>
          <Grid container spacing={1}>
            {kanbanData.map((section) => (
              <Grid item xs={12} md={6} lg={4} key={section.id}>
                {" "}
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
    </I18nextProvider>
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
