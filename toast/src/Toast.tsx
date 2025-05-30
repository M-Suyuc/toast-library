"use client";

import { ToastWithVariant } from "./types/toast.types";
import { Error, Info, Success, Warning } from "./icons";

const Toast: React.FC<ToastWithVariant> = ({
  title,
  description,
  variant = "SUCCESS",
}) => {
  const toastClass = `toast toast--${variant?.toLowerCase()}  `;

  return (
    <div className={`${toastClass}`}>
      <span>
        {variant === "SUCCESS" ? (
          <Success />
        ) : variant === "ERROR" ? (
          <Error />
        ) : variant === "WARNING" ? (
          <Warning />
        ) : variant === "INFO" ? (
          <Info />
        ) : null}
      </span>
      <div className="toast-text">
        <h3 className="toast-text-title">{title}</h3>
        <p className="toast-text-description">{description}</p>
      </div>
    </div>
  );
};

export default Toast;
