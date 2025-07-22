import { ReactNode } from "react";

export interface FormModalField {
  component: ReactNode;
  gridProps?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export interface FormModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  mode: "create" | "edit" | "view";
  onSubmit: (formData: Record<string, unknown>) => void;
  fields: FormModalField[];
  loading?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  onEdit?: () => void;
  submitButtonText?: string;
  cancelButtonText?: string;
  containerProps?: {
    id?: string;
    className?: string;
  };
}

export type FormModalMode = "create" | "edit" | "view";
