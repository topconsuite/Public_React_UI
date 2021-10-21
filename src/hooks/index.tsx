import React from "react";

import { ToastProvider } from "./useToast/useToast";

const TelluriaProvider: React.FC = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export default TelluriaProvider;
