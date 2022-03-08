import React from "react";

import {
  styled, Tooltip as TooltipMui, TooltipProps as TooltipPropsMui, tooltipClasses
} from "../../libraries/mui/components";

export type TooltipPosition =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";
export type TooltipTextAlign = "center" | "left" | "right";
export type TooltipArrowPosition = "center" | "start" | "end";

const BootstrapTooltip = styled(({ className, ...props }: TooltipPropsMui) => (
  <TooltipMui {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#2F3941"
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2F3941",
    fontSize: "0.75rem",
    padding: "10px 20px"
  }
}));

interface TooltipProps {
  title: string,
  position: TooltipPosition;
}

const Tooltip: React.FC<TooltipProps> = ({ title, position, children }) => (
  <BootstrapTooltip title={title} arrow placement={position}>
    {children}
  </BootstrapTooltip>
);

export default Tooltip;
