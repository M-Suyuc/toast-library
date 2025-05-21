export type TypeToast = "SUCCESS" | "ERROR" | "WARNING" | "INFO" | "DEFAULT";

export type TypePosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export type ToastProps = {
  id?: any;
  title?: string;
  description?: string;
  position?: TypePosition;
};

export interface ToastWithVariant extends ToastProps {
  variant?: TypeToast;
}

export interface ToastWithOptions extends ToastProps, ToastWithVariant {
  options?: {
    duration?: number;
    icon?: React.ReactNode;
  };
}

export interface ToastFunctions {
  default: (data: ToastWithVariant) => ToastWithVariant;
  success: (data: ToastWithVariant) => ToastWithVariant;
  error: (data: ToastWithVariant) => ToastWithVariant;
  warning: (data: ToastWithVariant) => ToastWithVariant;
  info: (data: ToastWithVariant) => ToastWithVariant;
}
