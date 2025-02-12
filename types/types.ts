export type SubjectStatus = "aprobada" | "regular" | null;
export type Subject = {
  code: number;
  name: string;
  status?: SubjectStatus;
};
export type SubjectByYear = {
  year: string;
  subjects: Subject[];
};
export type Degree = {
  degree: string;
  plan: SubjectByYear[];
};
