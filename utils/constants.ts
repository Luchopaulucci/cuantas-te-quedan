export const SubjectStatus = {
  PASSED: "promocionado",
  REGULAR: "regular",
};
export type SubjectStatus = (typeof SubjectStatus)[keyof typeof SubjectStatus];
