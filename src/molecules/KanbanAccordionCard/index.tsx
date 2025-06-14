import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import * as Styled from "./styles";

interface KanbanAccordionCardProps {
  accordionSummary?: React.ReactNode;
  title?: string;
  count?: number;
  children?: React.ReactNode;
  color?: string;
}

const KanbanAccordionCard: React.FC<KanbanAccordionCardProps> = ({
  accordionSummary,
  children,
  title,
  count = 0,
  color = "#6a4dc3"
}) => (
  <Styled.Container color={color}>
    <Accordion
      className="accordionComponent"
      expanded
    >
      <AccordionSummary>
        {accordionSummary || (

        <>
          <Styled.Title>
            {title}
          </Styled.Title>
          <Styled.Counter>{count}</Styled.Counter>
        </>

        )}
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  </Styled.Container>
);

KanbanAccordionCard.defaultProps = {
  accordionSummary: undefined,
  title: "",
  count: 0,
  children: undefined,
  color: "#6a4dc3"
};

export default KanbanAccordionCard;
