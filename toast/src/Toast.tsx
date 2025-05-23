"use client";

import { AnimatePresence, motion } from "motion/react";
import { ToastWithVariant } from "./types/toast.types";

import { Error, Info, Success, Warning } from "./icons";

import "./index.css";

const Toast: React.FC<ToastWithVariant> = ({
  title,
  description,
  variant = "DEFAULT",
}) => {
  const toastClass = `toast toast--${variant?.toLowerCase()}  `;

  return (
    <AnimatePresence>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={`${toastClass}`}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
