import React from "react";
import {
  Assessment, BarChart, Build, History
} from "../../libraries/mui/icons";
import * as Styled from "./styles";

interface ActionsCardKanbanProps {
  onReportsClick?: () => void;
  onChartsClick?: () => void;
  onMaintenanceClick?: () => void;
  onHistoryClick?: () => void;
  disabled?: boolean;
}

const ActionsCardKanban: React.FC<ActionsCardKanbanProps> = ({
  onReportsClick,
  onChartsClick,
  onMaintenanceClick,
  onHistoryClick,
  disabled = false
}) => (
  <Styled.Container>
    <Styled.ActionButton
      variant="outlined"
      size="small"
      startIcon={<Assessment />}
      onClick={onReportsClick}
      disabled={disabled}
      text="Relatórios"
    />

    <Styled.ActionButton
      variant="outlined"
      size="small"
      startIcon={<BarChart />}
      onClick={onChartsClick}
      disabled={disabled}
      text="Gráficos"
    />

    <Styled.ActionButton
      variant="outlined"
      size="small"
      startIcon={<Build />}
      onClick={onMaintenanceClick}
      disabled={disabled}
      text="Manutenção"
    />

    <Styled.ActionButton
      variant="outlined"
      size="small"
      startIcon={<History />}
      onClick={onHistoryClick}
      disabled={disabled}
      text="Histórico de Status"
    />
  </Styled.Container>
);

ActionsCardKanban.defaultProps = {
  onReportsClick: undefined,
  onChartsClick: undefined,
  onMaintenanceClick: undefined,
  onHistoryClick: undefined,
  disabled: false
};

export default ActionsCardKanban;
