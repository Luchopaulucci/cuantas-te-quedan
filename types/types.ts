import * as LucideIcons from "lucide-react";

export type SubjectStatus = "aprobada" | "regular" | null;
export type Subject = {
  code: number;
  name: string;
  status?: SubjectStatus;
  correlativas?: any;
  credits?: number | null;
};
export type SubjectByYear = {
  year: string;
  subjects: Subject[];
  totalCredits?: number;
  requirementsToEnroll?: any;
};
export type Degree = {
  degree: string;
  plan: SubjectByYear[];
};

//NEW INTERFACES
export interface Plan {
  year: string;
  subjects: Subject[];
}

export type University = {
  code: string;
  fullName: string;
};

export type UniversityKey = "UTN" | "UNC" | "UM" | "UNLaM";

// Steps types
export interface Step {
  title: string;
  description: string;
  children: React.ReactNode;
  icon: keyof typeof LucideIcons;
  isActive: boolean;
}

export interface StepItem {
  title: string;
  icon: keyof typeof LucideIcons;
}
