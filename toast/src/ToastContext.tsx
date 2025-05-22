"use client";

import { useEffect, useState } from "react";

import Toast from "./Toast";

import type {
  ToastWithOptions,
  ToastWithVariant,
  TypePosition,
} from "./types/toast.types";

import "./index.css";

let globalToast: (data: ToastWithVariant) => void;

interface Props {
  position?: TypePosition;
}

export const Toaster = ({ position = "bottom-right" }: Props) => {
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
      ? Math.min(...toasts.map((toast) => toast.options?.duration || 3000))
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

  const toastClass = `toast_container ${position}`;

  return (
    isMounted &&
    toasts.length > 0 && (
      <section className={toastClass}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast?.description}
            variant={toast?.variant}
            // position={toast.position}
          />
        ))}
      </section>
    )
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
