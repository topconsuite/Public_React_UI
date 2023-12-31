import styled, { css } from "styled-components";
import { animated } from "react-spring";

interface ContainerProps {
  type?: "success" | "error" | "info";
  hasdescription?: number;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
};

export const ToastContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
  max-width: 100%;

  :empty {
    padding: 0 !important;
  }
`;
export const ToastContent = styled(animated.div)<ContainerProps>`
  z-index: 99999;
  width: 360px;
  max-width: 100%;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || "info"]}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 1rem;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => !props.hasdescription
    && css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
