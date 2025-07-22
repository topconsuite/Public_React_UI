import React from "react";

import { Skeleton } from "@libraries/mui/components";

import * as Styled from "./styles";

interface KanbanSectionIconProps {
  iconPath: string;
}

const KanbanSectionIcon: React.FC<KanbanSectionIconProps> = ({ iconPath }) => (
  <Styled.Container
    id="kanbanSectionIcon"
    src={iconPath}
    alt="kanban section icon"
    loading={() => <Skeleton variant="rectangular" animation="wave" width={35} height={35} />}
  />
);

export default KanbanSectionIcon;
