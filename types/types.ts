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

export type University = {
  code: string;
  fullName: string;
  logo: string;
};
