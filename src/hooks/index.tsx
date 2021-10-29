import React from "react";

import { ToastProvider } from "./useToast/useToast";
import { ToastProviderComponents } from "../store/Telluria-Provider.interface";

type TelluriaProviderProps = { components?: ToastProviderComponents }
const TelluriaProvider: React.FC<TelluriaProviderProps> = ({ children, components }) => (
  <>
    { components?.toast ? (<ToastProvider>{children}</ToastProvider>) : <>{children}</> }
  </>
);

TelluriaProvider.defaultProps = {
  components: {
    toast: false
  }
};

export default TelluriaProvider;
