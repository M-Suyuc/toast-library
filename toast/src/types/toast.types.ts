export type TypeToast = "SUCCESS" | "ERROR" | "WARNING" | "INFO" | "DEFAULT";

export type TypePosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  createAt?: number;
  duration?: number;
}

export interface ToastWithVariant extends ToastProps {
  variant: TypeToast;
}

export interface ToastWithOptions
  extends Pick<ToastProps, "title" | "description"> {
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
