import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import {
  FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle
} from "react-icons/fi";

import { ToastMessage, useToast } from "../../hooks/useToast/useToast";
import { ToastContent } from "./styles";

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {

  const { removeToast } = useToast();

  useEffect(() => {

    const timer = setTimeout(() => {
      removeToast(message.id);
    }, message.duration || 5000);

    return () => clearTimeout(timer);

  }, [removeToast, message.id, message.duration]);

  return (
    <ToastContent
      className="toastMessageGlobal"
      type={message.type}
      hasdescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || "info"]}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{ ReactHtmlParser(message.description) }</p>}
      </div>
      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </ToastContent>
  );
};

export default Toast;
