"use client";
import { SubjectByYear, SubjectStatus } from "@/types/types";
import Materia from "./Subject";

type MateriaContainerProps = {
  subStatus: SubjectByYear[];
  setSubStatus: (e: SubjectByYear[]) => void;
};
export default function MateriaContainer({
  subStatus,
  setSubStatus,
}: MateriaContainerProps) {
  function handleStatus(newStatus: SubjectStatus, code: number) {
    let nextSubStatus = [...subStatus];
    nextSubStatus = nextSubStatus.map((subByYear) => {
      const subject = subByYear.subjects.findIndex((s) => s.code == code);
      if (subject >= 0) {
        subByYear.subjects[subject].status = newStatus;
        return subByYear;
      } else {
        return subByYear;
      }
    });

    setSubStatus(nextSubStatus);
  }
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 sm:mx-0 mx-4">
      {subStatus.map((subYear) => {
        return (
          <div key={subYear.year}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 capitalize my-4 text-center">
              {subYear.year}
            </h2>
            <div className="flex flex-col gap-4 w-full">
              {subYear.subjects.map((s) => (
                <div key={s.code} className="w-full max-w-[500px] mx-auto">
                  <Materia
                    key={s.code}
                    name={s.name}
                    status={s.status}
                    code={s.code}
                    handleStatus={handleStatus}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
