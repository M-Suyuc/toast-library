"use client";

import { useEffect, useState } from "react";
import Toast, { TypeToast } from "./Toast";

interface Props {
  title: string;
  description: string;
  options?: {
    type?: TypeToast;
    duration?: number;
  };
}

let globalToast: any;

export const Toaster = () => {
  const [toasts, setToasts] = useState<Array<Props & { id: string }>>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showToast = (data: Props) => {
    const id = Math.random().toString(36).substring(2, 9);

    const newToast = {
      ...data,
      id,
    };

    setToasts((prev) => [...prev, newToast]);
  };

  globalToast = showToast;

  return (
    <div>
      {isMounted &&
        toasts.length > 0 &&
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            type={toast.options?.type}
            duration={toast.options?.duration}
          />
        ))}
    </div>
  );
};

export const toast = (data: Props) => {
  if (globalToast) {
    globalToast(data);
  } else {
    console.error(
      "🔔 <Toaster /> component is not mounted. Check toast.pheralb.dev/toaster for more information."
    );
  }
};
