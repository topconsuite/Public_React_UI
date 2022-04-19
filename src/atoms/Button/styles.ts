import styled, { css } from "styled-components";

import { LoadingButton } from "../../libraries/mui/components";

interface ContainerProps {
  size?: "small" | "large";
}

const smallSizeStyle = css`
  border-radius: 20px !important;
  min-width: 150px !important;
  min-height: 40px !important;
  line-height: 16px !important;
`;

const largeSizeStyle = css`
  border-radius: 40px !important;
  min-width: 230px !important;
  min-height: 55px !important;
  font-size: 16px !important;
  line-height: 20px !important;

  > .MuiButton-endIcon, .MuiButton-startIcon {
    margin: 0px !important;
    svg {
      width: 35px !important;
      height: 35px !important;
    }
  }

  &.MuiLoadingButton-loading {
    background-color: #D2D2D2 !important;

    > .MuiLoadingButton-loadingIndicator {
      > * {
        width: 30px !important;
        height: 30px !important;
      }
    }
  }
`;

const Container = styled(LoadingButton)<ContainerProps>`
  overflow: hidden !important;

  ${(props) => (props.size === "small" && smallSizeStyle)};
  ${(props) => (props.size === "large" && largeSizeStyle)};

  &.Mui-disabled {
    background-color: #D2D2D2 !important;
  }

`;

const Text = styled.span`
  width: 150px !important;
`;

export { Container, Text };
