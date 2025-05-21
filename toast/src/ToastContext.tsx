"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import Toast from "./Toast";
import type { ToastWithOptions, ToastWithVariant } from "./types/toast.types";

let globalToast: (data: ToastWithVariant) => void;

export const Toaster = () => {
  const [toasts, setToasts] = useState<ToastWithOptions[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openToast = (data: ToastWithVariant) => {
    const id = Math.random().toString(36).substring(2, 9);

    const newToast = {
      ...data,
      id,
    };

    setToasts((prev) => [...prev, newToast]);
  };

  function removeItem(arr: ToastWithVariant[] = toasts, item: any) {
    return arr.filter((toast) => toast.id !== item.id);
  }

  let duration =
    toasts.length > 0
      ? Math.min(...toasts.map((toast) => toast.options?.duration || 2000))
      : 0;

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

  globalToast = openToast;

  return (
    <AnimatePresence>
      {isMounted &&
        toasts.length > 0 &&
        toasts.map((toast, id) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast?.description}
            id={id}
            variant={toast?.variant ?? "DEFAULT"}
          />
        ))}
    </AnimatePresence>
  );
};

export const ShowToast = (data: ToastWithVariant) => {
  if (globalToast) {
    globalToast(data);
  } else {
    console.error(
      "<Toaster /> component is not mounted. You must import <Toaster /> in your  root layout"
    );
  }
};
