"use client";

import { useEffect, useState } from "react";
import Toast, { TypeToast } from "./Toast";
import { AnimatePresence } from "motion/react";

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

  function removeItem(arr: Array<Props & { id: string }> = toasts, item: any) {
    return arr.filter((toast) => toast.id !== item.id);
  }

  let duration = Math.min(
    ...toasts.map((toast) => toast.options?.duration || 1200)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length) {
        setToasts((toasts) => removeItem(toasts, toasts[0]));
      }
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [toasts]);

  globalToast = showToast;

  return (
    <div>
      <AnimatePresence>
        {isMounted &&
          toasts.length > 0 &&
          toasts.map((toast, id) => (
            <Toast
              key={toast?.id}
              title={toast?.title}
              description={toast?.description}
              type={toast?.options?.type}
              id={id}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export const toast = (data: Props) => {
  if (globalToast) {
    globalToast(data);
  } else {
    console.error(
      "<Toaster /> component is not mounted. You must import <Toaster /> in your  root layout "
    );
  }
};
