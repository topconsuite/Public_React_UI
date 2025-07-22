import React, { MouseEventHandler } from "react";

import Span from "@atoms/Span";
import { Handyman, TimerOutlined } from "@mui/icons-material";
import { Tooltip, Typography } from "@mui/material";
import { useTheme, useTranslation } from "@/hooks";
import { KanbanMessages } from "@/index";
import KanbanSectionIcon from "../KanbanSectionIcon";

import * as Styled from "./styles";

export interface KanbanCardSummaryProps {
  title1: string;
  title2?: string;
  description1: string;
  description2?: string;
  description3?: string;
  description4?: string;
  iconPath?: string;
  primarycolor: string;
  timeInStatusMinutes?: number;
  maintenanceDaysLeft?: number | null;
  timeInStatusText?: string;
  maintenanceText?: string;
  concreteProduction?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const KanbanCardSummary: React.FC<KanbanCardSummaryProps> = ({
  title1,
  title2,
  description1,
  description2,
  description3,
  description4,
  iconPath,
  primarycolor,
  timeInStatusMinutes = 15,
  maintenanceDaysLeft = null,
  timeInStatusText = "Tempo no status",
  maintenanceText = "Próxima manutenção em",
  concreteProduction = "0m³",
  onClick
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const TOOLTIP_LEAVE_TOUCH_DELAY = 2000;
  const getTimeIconColor = (minutes: number) => {
    if (minutes <= 10) return theme.colors.success;
    if (minutes <= 25) return theme.colors.warning;

    return theme.colors.error;
  };

  const getMaintenanceIconColor = (daysLeft: number | null) => {
    if (daysLeft === null || daysLeft === undefined) return theme.colors.grayText;
    if (daysLeft >= 4) return theme.colors.success;
    if (daysLeft >= 1) return theme.colors.warning;

    return theme.colors.error;
  };

  const formatTimeTooltip = (minutes: number, text: string) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hours > 0) {
      return `${text}: ${hours}h ${mins}min`;
    }

    return `${text}: ${mins}min`;
  };

  const formatMaintenanceTooltip = (days: number | null, text: string) => {
    if (days === null || days === undefined) {
      return "Manutenção não cadastrada";
    }
    if (days <= 0) {
      return `Manutenção vencida há ${Math.abs(days)} ${Math.abs(days) === 1 ? "dia" : "dias"}`;
    }
    if (days === 1) {
      return `${text} ${days} dia`;
    }

    return `${text} ${days} dias`;
  };

  return (
    <Styled.Container primarycolor={primarycolor} onClick={onClick || undefined}>
      {iconPath && <KanbanSectionIcon iconPath={iconPath} />}
      <Styled.Infos>
        <Span id="title1">{title1}</Span>
        {title2 && <Span id="title2">{title2}</Span>}
        <Span>
          {t(KanbanMessages.state)}
          :
          {" "}
          {description1}
        </Span>
        {description2 && (
        <Span>
          {t(KanbanMessages.city)}
          :
          {" "}
          {description2}
        </Span>
        )}
        {description3 && (
        <Span>
          {t(KanbanMessages.address)}
          :
          {" "}
          {description3}
        </Span>
        )}
        {description4 && <Span>{description4}</Span>}
      </Styled.Infos>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px"
        }}
        className="tooltip-container"
      >
        <Tooltip
          title="Volume produzido"
          arrow
          placement="left"
          enterTouchDelay={0}
          leaveTouchDelay={TOOLTIP_LEAVE_TOUCH_DELAY}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#003563"
            }}
          >
            {concreteProduction}
          </Typography>
        </Tooltip>
        <Tooltip
          title={formatTimeTooltip(timeInStatusMinutes, timeInStatusText)}
          arrow
          placement="left"
          enterTouchDelay={0}
          leaveTouchDelay={TOOLTIP_LEAVE_TOUCH_DELAY}
        >
          <Styled.TimerIcon iconColor={getTimeIconColor(timeInStatusMinutes)}>
            <TimerOutlined fontSize="small" />
          </Styled.TimerIcon>
        </Tooltip>
        <Tooltip
          title={formatMaintenanceTooltip(maintenanceDaysLeft, maintenanceText)}
          arrow
          placement="left"
          enterTouchDelay={0}
          leaveTouchDelay={TOOLTIP_LEAVE_TOUCH_DELAY}
        >
          <Styled.MaintenanceIcon iconColor={getMaintenanceIconColor(maintenanceDaysLeft)}>
            <Handyman fontSize="small" />
          </Styled.MaintenanceIcon>
        </Tooltip>
      </div>
    </Styled.Container>
  );
};

export default KanbanCardSummary;
