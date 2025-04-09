import { Plan } from "@/types/types";
import { SubjectStatus } from "@/utils/constants";
import { useEffect, useState } from "react";

export const useSubjectsStatistics = (
  subjectStatus: Record<string, SubjectStatus | null>,
  plans: Plan[]
) => {
  const [subjectsTotal, setSubjectsTotal] = useState<number>(0);
  const [subjectsPassed, setSubjectsPassed] = useState<number>(0);
  const [subjectsRegular, setSubjectsRegular] = useState<number>(0);

  if (!subjectStatus || !plans)
    throw new Error("No subject status or plans found");

  useEffect(() => {
    const total = plans.reduce((acc, plan) => acc + plan.subjects.length, 0);
    setSubjectsTotal(total);
  }, [plans]);

  useEffect(() => {
    const passed = Object.values(subjectStatus).filter(
      (status) => status === SubjectStatus.PASSED
    ).length;
    const regular = Object.values(subjectStatus).filter(
      (status) => status === SubjectStatus.REGULAR
    ).length;

    setSubjectsPassed(passed);
    setSubjectsRegular(regular);
  }, [subjectStatus]);

  return {
    subjectsTotal,
    subjectsPassed,
    subjectsRegular,
  };
};
