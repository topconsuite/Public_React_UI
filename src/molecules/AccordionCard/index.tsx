import React from "react";

// region Libraries
import { ExpandMore } from "@libraries/mui/icons";
import { Accordion, AccordionDetails, AccordionSummary } from "@libraries/mui/components";
// endregion Libraries
// region Styles
import Styled from "./styles";
// endregion Styles

// region Interfaces
interface IKanbanAccordionCardProps {
  accordionSummary: React.ReactNode;
  onChange?: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  showExpandIcon?: boolean;
  expanded: boolean;
  children?: React.ReactNode;
}
// endregion Interfaces

const AccordionCard: React.FC<IKanbanAccordionCardProps> = (
  {
    accordionSummary, children, onChange, showExpandIcon, expanded
  }
) => {

  // region Handlers
  /*
    * @desc Handles the accordion change event, running the onChange parameter
    * @param {React.SyntheticEvent} event - The event
    * @param {boolean} isExpanded - The expanded state
    * @returns {void}
   */
  const handleAccordionChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    onChange && onChange(event, isExpanded);
  };
  // endregion Handlers

  return (
    <Styled.Container showExpandIcon={showExpandIcon}>
      <Accordion
        className="accordionComponent"
        onChange={handleAccordionChange}
        expanded={expanded}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          expandIcon={showExpandIcon && <ExpandMore />}
          id="panel1a-header"
        >
          {accordionSummary}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </Styled.Container>
  );
};

AccordionCard.defaultProps = {
  showExpandIcon: false,
  onChange: () => { /** empty */ },
  children: undefined
};

export default AccordionCard;
