"use client";

import { motion } from "motion/react";

import "./index.css";

export type TypeToast = "SUCCESS" | "ERROR" | "WARNING" | "INFO";

export type ToastProps = {
  title: string;
  description: string;
  type?: TypeToast;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({ title, description, type, onClose }) => {
  const toastClass = `toast toast--${type?.toLowerCase()}`;

  const hadleDelete = () => {
    onClose?.();
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
      layout
      className={`${toastClass}`}
    >
      <div className="toast-text">
        <h3 className="toast-text-title">{title}</h3>
        <p className="toast-text-description">{description}</p>
      </div>
      <button onClick={hadleDelete} className="toast-close">
        ×
      </button>
    </motion.div>
  );
};

export default Toast;
