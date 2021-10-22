import React, {
  createContext, useContext, useCallback, useState, useMemo
} from "react";
import { useTransition } from "react-spring";

import { uuid } from "uuidv4";
import $ from "jquery";

import Toast from "../../atoms/Toast";
import { ToastContainer } from "../../atoms/Toast/styles";

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  duration?: number;
  description?: string;
  overwrite?: boolean;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext({} as ToastContextData);
const ToastProvider: React.FC = ({ children }) => {

  const [messages, setMessages] = useState<ToastMessage[]>([]);

  // Define animation from toast container
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: "-120%", opacity: 0 },
      enter: { right: "0%", opacity: 1 },
      leave: { right: "-120%", opacity: 0 }
    }
  );

  /** Show toast
   */
  const addToast = useCallback(
    ({
      type, title, description, duration, overwrite
    }: Omit<ToastMessage, "id">) => {

      const id = uuid();
      const toast = {
        id,
        type,
        title,
        duration,
        description,
        overwrite
      };

      if (overwrite) {

        const toastElement = $(".toastMessageGlobal");

        if (toastElement.length) {
          toastElement.fadeOut(500);
          setTimeout(() => { setMessages((state) => [...state, toast]); }, 500);
        } else setMessages((state) => [...state, toast]);

      } else setMessages((state) => [...state, toast]);
    },
    []
  );

  /** Hide toast
   */
  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const contextValue = useMemo<ToastContextData>(
    () => ({
      addToast,
      removeToast
    }),
    [addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer>
        {messagesWithTransitions.map(({ item, key, props }) => (
          <Toast key={key} style={props} message={item} />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {

  const context = useContext(ToastContext);

  if (!context?.addToast) throw new Error("useToast must be used within a ToastProvider");

  return context;
}

export { ToastProvider, useToast };
