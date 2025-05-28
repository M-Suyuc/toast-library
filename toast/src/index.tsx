import "./index.css";
export { Toaster } from "./ToastContext";
export { toast } from "./toast-functions";

export type {
  ToastProps,
  ToastFunctions,
  ToastWithOptions,
  ToastWithVariant,
  TypePosition,
  TypeToast,
} from "./types/toast.types";

// "dev": "tsup --watch",
// "build": "tsc && tsup",
