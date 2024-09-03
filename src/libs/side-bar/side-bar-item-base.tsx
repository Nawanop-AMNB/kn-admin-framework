import { ReactNode } from "react";

export type SideBarItemBaseSchema = {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
};
