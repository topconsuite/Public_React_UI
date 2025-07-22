import React from "react";

import { ThemeProvider } from "@mui/material";
import { ToastProvider } from "./useToast/useToast";
import { ToastProviderComponents } from "../store/Telluria-Provider.interface";
import { Provider as JotaiProvider } from "../libraries/jotai";
import useTheme from "./useTheme";

type TelluriaProviderProps = {
  children: React.ReactNode;
  components?: ToastProviderComponents;
}

const TelluriaProviderContent: React.FC<TelluriaProviderProps> = ({ children, components }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      { components?.toast ? (<ToastProvider>{children}</ToastProvider>) : <>{children}</> }
    </ThemeProvider>
  );
};

const TelluriaProvider: React.FC<TelluriaProviderProps> = ({ children, components }) => (
  <JotaiProvider>
    <TelluriaProviderContent components={components}>
      {children}
    </TelluriaProviderContent>
  </JotaiProvider>
);

TelluriaProvider.defaultProps = {
  components: {
    toast: false
  }
};

export default TelluriaProvider;
