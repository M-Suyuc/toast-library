"use client";

import { useState, useEffect } from "react";

import "./index.css";

export type TypeToast = "SUCCESS" | "ERROR" | "WARNING" | "INFO";

export type ToastProps = {
  title: string;
  description: string;
  type?: TypeToast;
  duration?: number;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type,
  duration,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const toastClass = `toast toast--${type?.toLowerCase()}`;

  return (
    <div className={toastClass}>
      <span className="toast-icon ">
        {type === "SUCCESS"
          ? "✓"
          : type === "ERROR"
            ? "✕"
            : type === "WARNING"
              ? "⚠"
              : "ℹ"}
      </span>
      <div className="toast-text">
        <h3 className="toast-text-title">{title}</h3>
        <p className="toast-text-description">{description}</p>
      </div>
    </div>
  );
};

export default Toast;
