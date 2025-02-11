"use client";
import { useState } from "react";
import Materia from "./Materia";

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
type MateriaContainerProps = {
  subStatus: SubjectByYear[];
  setSubStatus: any;
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
    <div>
      {subStatus.map((subYear, i) => {
        return (
          <div key={subYear.year}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 capitalize my-4 text-center">
              {subYear.year}
            </h2>
            <div className="flex flex-col gap-4 w-full">
              {subYear.subjects.map((s, i: number) => (
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
