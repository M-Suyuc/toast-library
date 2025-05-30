"use client";

import { useEffect, useState } from "react";
import Toast from "./Toast";
import type {
  ToastWithOptions,
  ToastWithVariant,
  TypePosition,
} from "./types/toast.types";
import { generateId } from "./utils";

let globalToast: (data: ToastWithVariant) => void;

interface PositonToaster {
  position?: TypePosition;
}

export const Toaster = ({ position = "bottom-right" }: PositonToaster) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [toasts, setToasts] = useState<Array<ToastWithVariant>>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openToast = (data: ToastWithVariant & ToastWithOptions) => {
    const id = generateId();
    const now = Date.now();

    const newToast: ToastWithVariant = {
      id,
      duration: data.options?.duration ?? 3000,
      createAt: now,
      ...data,
    };

    setToasts((prevToasts) => {
      const isOnTopPosition = position.startsWith("top-");

      return isOnTopPosition
        ? [newToast, ...prevToasts]
        : [...prevToasts, newToast];
    });
  };

  useEffect(() => {
    const timeouts: number[] = [];

    toasts.map((toast) => {
      if (toast.duration === Infinity) return;

      const elapsed = Date.now() - toast.createAt!;
      const remaining = Math.max(0, toast.duration! - elapsed);

      const timeout = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, remaining);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
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
      "<Toaster /> component is not mounted. You must import <Toaster /> in your root layout"
    );
  }
};
