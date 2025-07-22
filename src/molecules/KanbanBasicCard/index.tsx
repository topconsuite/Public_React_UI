import React, { MouseEventHandler } from "react";

import KanbanCardSummary, { KanbanCardSummaryProps } from "../KanbanCardSummary";

import * as Styled from "./styles";

export interface KanbanBasicCardProps {
  summaryProps: KanbanCardSummaryProps,
  status?: string,
  statusColor?: string,
  onClick?: MouseEventHandler<HTMLDivElement>,
  id?: string
}

export const KanbanBasicCard: React.FC<KanbanBasicCardProps> = ({
  summaryProps, status, statusColor, onClick, id
}) => {

  const {
    title1,
    title2,
    description1,
    description2,
    description3,
    description4,
    iconPath,
    primarycolor,
    timeInStatusMinutes,
    maintenanceDaysLeft,
    timeInStatusText,
    maintenanceText,
    concreteProduction
  } = summaryProps;

  return (
    <Styled.Container className="basic-card" id={id}>
      <KanbanCardSummary
        title1={title1}
        title2={title2}
        description1={description1}
        description2={description2}
        description3={description3}
        description4={description4}
        iconPath={iconPath}
        primarycolor={primarycolor}
        onClick={onClick}
        timeInStatusMinutes={timeInStatusMinutes}
        maintenanceDaysLeft={maintenanceDaysLeft}
        timeInStatusText={timeInStatusText}
        maintenanceText={maintenanceText}
        concreteProduction={concreteProduction}
      />
      <Styled.Status statusColor={statusColor}>{status}</Styled.Status>
    </Styled.Container>
  );
};

export default KanbanBasicCard;
