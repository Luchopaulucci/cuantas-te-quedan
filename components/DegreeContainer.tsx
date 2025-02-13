import { useEffect, useState } from "react";
import SubjectContainer from "./SubjectContainer";
import { ProgressCustom } from "./Progress";
import References from "./References";
import { Degree, SubjectByYear } from "@/types/types";

export default function DegreeContainer({ degree }: { degree: Degree }) {
  const [subStatus, setSubStatus] = useState<SubjectByYear[]>(degree.plan);
  const [university, setUniversity] = useState<string | null>(null);
  useEffect(() => {
    const univeristyCode = localStorage.getItem("university_choosen");
    if (univeristyCode) setUniversity(univeristyCode);
  }, []);

  let passed = 0;
  let regular = 0;

  const yearsLength = degree.plan.map((year) => year.subjects.length);
  const subjectsTotal = yearsLength.reduce((prev, curr) => prev + curr);

  subStatus.forEach((subByYear) => {
    subByYear.subjects.forEach((sub) => {
      if (sub.status === "aprobada") {
        passed++;
      } else if (sub.status === "regular") {
        regular++;
      }
    });
  });
  const passedOverTotal = Math.floor((passed / subjectsTotal) * 100);

  return (
    <div className="h-max  flex flex-col justify-center items-center">
      <div className="w-full py-5">
        <div className="w-full flex justify-center">
          <h2 className="sm:text-4xl text-xl font-medium text-center">
            {" "}
            {degree.degree} - {university}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center pt-5">
          <p className="text-2xl">Materias aprobadas: {passed} </p>
          <p className="text-2xl">Materias regularizdas: {regular} </p>
          <h3 className="text-2xl ">
            ¡Aprobaste el{" "}
            <span className="font-bold"> {passedOverTotal}% </span>
            de la carrera!
          </h3>
        </div>
        <div className="w-full flex justify-center py-5">
          <ProgressCustom progress={passedOverTotal} />
        </div>

        <div className="flex justify-center">
          <References />
        </div>
      </div>
      <div className="justify-center items-center w-4xl sm:gap-8 gap-4">
        <SubjectContainer subStatus={subStatus} setSubStatus={setSubStatus} />
      </div>
    </div>
  );
}
