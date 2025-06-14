import React from "react";
import { SpanContainer } from "./styles";

export interface SpanProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Span: React.FC<SpanProps> = ({ id, children, className }) => (
  <SpanContainer id={id} className={className}>
    <>{children}</>
  </SpanContainer>
);

Span.defaultProps = {
  id: undefined,
  className: undefined
};

export default Span;
