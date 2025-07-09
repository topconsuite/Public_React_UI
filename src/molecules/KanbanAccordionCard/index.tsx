import React, { useState, useEffect } from "react";
import {
  Accordion, AccordionDetails, AccordionSummary, useMediaQuery, useTheme
} from "@mui/material";

import * as Styled from "./styles";

interface KanbanAccordionCardProps {
  accordionSummary?: React.ReactNode;
  title?: string;
  count?: number;
  children?: React.ReactNode;
  color?: string;
  expanded?: boolean;
  onChange?: (expanded: boolean) => void;
}

const KanbanAccordionCard: React.FC<KanbanAccordionCardProps> = ({
  accordionSummary,
  children,
  title,
  count = 0,
  color = "#6a4dc3",
  expanded: expandedProp,
  onChange
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [internalExpanded, setInternalExpanded] = useState(true);

  const isControlled = expandedProp !== undefined;
  const expanded = isControlled ? expandedProp : internalExpanded;

  useEffect(() => {
    if (!isDesktop && !isControlled) {
      setInternalExpanded(true);
    }
  }, [isDesktop, isControlled]);

  const handleChange = () => {
    if (isDesktop) return;

    if (isControlled && onChange) {
      onChange(!expanded);
    } else if (!isControlled) {
      setInternalExpanded(!expanded);
    }
  };

  return (
    <Styled.Container color={color}>
      <Accordion
        className="accordionComponent"
        expanded={expanded}
        onChange={handleChange}
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
};

KanbanAccordionCard.defaultProps = {
  accordionSummary: undefined,
  title: "",
  count: 0,
  children: undefined,
  color: "#6a4dc3",
  expanded: undefined,
  onChange: undefined
};

export default KanbanAccordionCard;
