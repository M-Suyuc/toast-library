export type TypeToast = "SUCCESS" | "ERROR" | "WARNING" | "INFO" | "DEFAULT";

export type TypePosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export type ToastProps = {
  title?: string;
  description?: string;
};

export interface ToastWithVariant extends ToastProps {
  id?: string;
  variant: TypeToast;
  createAt?: number;
  duration?: number;
}

export interface ToastWithOptions extends ToastProps {
  options?: {
    duration?: number;
    icon?: React.ReactNode;
  };
}

export interface ToastFunctions {
  default: (data: ToastWithOptions) => ToastWithOptions;
  success: (data: ToastWithOptions) => ToastWithOptions;
  error: (data: ToastWithOptions) => ToastWithOptions;
  warning: (data: ToastWithOptions) => ToastWithOptions;
  info: (data: ToastWithOptions) => ToastWithOptions;
}
