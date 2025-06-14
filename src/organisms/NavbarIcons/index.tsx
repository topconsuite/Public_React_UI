import React from "react";
import {
  Apps, Language, Logout, Settings, Task
} from "../../libraries/mui/icons";

import * as Styled from "./styles";

const NavbarIcons: React.FC = () => (
  <Styled.Container>
    <Styled.IconButton as={Apps} />
    <Styled.IconButton as={Language} />
    <Styled.IconButton as={Settings} />
    <Styled.IconButton as={Task} />
    <Styled.IconButton as={Logout} />
  </Styled.Container>
);

export default NavbarIcons;
