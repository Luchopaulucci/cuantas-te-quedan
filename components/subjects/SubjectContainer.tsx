import { Dispatch, SetStateAction, useState } from "react";
import useUniversityDegreesSubjects from "@/hooks/useUniversityDegreesSubjects";
import SubjectsStats from "./SubjectsStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { transformYearString } from "@/utils/utils";
import SubjectListItem from "./SubjectListItem";
import { SubjectStatus } from "@/utils/constants";
import { Button } from "../Button";
import { useSubjectsStatistics } from "@/hooks/useSubjectsStatistics";

interface SubjectContainerProps {
  universityCode: string;
  degreeCode: string;
  subjectStatus: Record<string, SubjectStatus | null>;
  setSubjectStatus: Dispatch<
    SetStateAction<Record<string, SubjectStatus | null>>
  >;
}

export default function SubjectContainer({
  universityCode,
  degreeCode,
  subjectStatus,
  setSubjectStatus,
}: SubjectContainerProps) {
  const { plans } = useUniversityDegreesSubjects(universityCode, degreeCode);

  const { subjectsTotal, subjectsPassed, subjectsRegular } =
    useSubjectsStatistics(subjectStatus, plans);

  const getYearPassedSubjects = (year: string) => {
    const subjects = plans.find((plan) => plan.year === year)?.subjects;
    return subjects?.filter(
      (subject) => subjectStatus[subject.code] === SubjectStatus.PASSED
    ).length;
  };

  const changeSubjectStatus = (
    subjectCode: number,
    subjectStatus: SubjectStatus | null
  ) => {
    setSubjectStatus((prev) => ({ ...prev, [subjectCode]: subjectStatus }));
  };

  const changeAllYearSubjectsStatus = (year: string, status: SubjectStatus) => {
    const subjects = plans.find((plan) => plan.year === year)?.subjects;

    if (!subjects) return;

    const newStatus = subjects.reduce((acc, subject) => {
      acc[subject.code] = status;
      return acc;
    }, {} as Record<string, SubjectStatus | null>);
    setSubjectStatus((prev) => ({ ...prev, ...newStatus }));
  };

  return (
    <div className="px-6 space-y-6">
      <div className="mx-auto gap-4 rounded-lg space-y-8 shadow-sm">
        <SubjectsStats
          subjectsTotal={subjectsTotal}
          passed={subjectsPassed}
          regular={subjectsRegular}
        />
      </div>
      <Tabs defaultValue="tab-0">
        <TabsList className="flex flex-row gap-2 mb-8 overflow-x-auto">
          {plans.map((year, index) => (
            <TabsTrigger
              value={`tab-${index}`}
              key={index}
              className="group flex flex-row items-center justify-between gap-2 py-2 px-4
                data-[state=active]:text-cyan-50 transition-all hover:bg-cyan-50 data-[state=active]:bg-cyan-500 
               border border-slate-200 text-slate-700 font-semibold text-sm
                rounded-full shadow-sm"
            >
              <span className="block w-20">
                {transformYearString(year.year)}
              </span>

              <div className="bg-slate-100 rounded-full border border-slate-200 group-data-[state=active]:bg-cyan-400 group-data-[state=active]:text-cyan-100 group-data-[state=active]:border-cyan-500 text-slate-700 font-bold text-sm py-0.5 px-2">
                {getYearPassedSubjects(year.year)}/{year.subjects.length}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {plans.map((year, index) => (
          <TabsContent
            value={`tab-${index}`}
            key={index}
            className="flex flex-col gap-6"
          >
            {year.subjects.map((subject) => (
              <SubjectListItem
                key={subject.code}
                name={subject.name}
                code={subject.code}
                status={subjectStatus[subject.code]}
                handleStatus={changeSubjectStatus}
              />
            ))}

            <div className="flex flex-col-reverse md:flex-row md:justify-end gap-2">
              <Button
                title="Deseleccionar Todas"
                active={false}
                color=""
                onClick={() => changeAllYearSubjectsStatus(year.year, "")}
              />

              <Button
                title="Regularizar Todas"
                active={false}
                color="yellow"
                onClick={() =>
                  changeAllYearSubjectsStatus(year.year, SubjectStatus.REGULAR)
                }
              />

              <Button
                title="Promocionar Todas"
                active={false}
                color="green"
                onClick={() =>
                  changeAllYearSubjectsStatus(year.year, SubjectStatus.PASSED)
                }
              />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
