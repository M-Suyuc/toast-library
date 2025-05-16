"use client";

import { motion } from "motion/react";

import "./index.css";

export type TypeToast = "SUCCESS" | "ERROR" | "WARNING" | "INFO";
export type TypePosition =
  | "top-right"
  | "bottom-right"
  | "top-left"
  | "bottom-left";

export type ToastProps = {
  title: string;
  description: string;
  type?: TypeToast;
  position?: TypePosition;
  id: any;
};

const Toast: React.FC<ToastProps> = ({
  title,
  description,
  type = "SUCCESS",
  position = "bottom-right",
  id,
}) => {
  const toastClass = `toast toast--${type?.toLowerCase()} ${position}`;

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      style={{
        bottom: `${id * 80}px`,
      }}
      className={`${toastClass}`}
    >
      <span>
        {type === "SUCCESS" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        ) : type === "ERROR" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 9v4" />
            <path d="M12 16v.01" />
          </svg>
        ) : type === "WARNING" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 9v4" />
            <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
            <path d="M12 16h.01" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 9h.01" />
            <path d="M11 12h1v4h1" />
          </svg>
        )}
      </span>

      <div className="toast-text">
        <h3 className="toast-text-title">{title}</h3>
        <p className="toast-text-description">{description}</p>
      </div>
    </motion.div>
  );
};

export default Toast;
