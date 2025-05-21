import { ShowToast } from "./ToastContext";

import type { ToastFunctions } from "./types/toast.types";

export const toast: ToastFunctions = {
  default(data) {
    ShowToast({ ...data, variant: "DEFAULT" });
    return data;
  },

  success: (data) => {
    ShowToast({ ...data, variant: "SUCCESS" });
    return data;
  },

  info: (data) => {
    ShowToast({ ...data, variant: "INFO" });
    return data;
  },

  error: (data) => {
    ShowToast({ ...data, variant: "ERROR" });
    return data;
  },

  warning: (data) => {
    ShowToast({ ...data, variant: "WARNING" });
    return data;
  },
};
