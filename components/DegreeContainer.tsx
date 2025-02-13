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
  const passedOverTotal = Math.ceil((passed / subjectsTotal) * 100);
  const progressOverTotal = Math.ceil((regular / subjectsTotal) * 100);
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
          <p className="text-2xl">Materias promocionadas: {passed} </p>
          <p className="text-2xl">Materias regularizadas: {regular + passed} </p>
          <h3 className="text-2xl ">
            ¡Aprobaste el{" "}
            <span className="font-bold"> {passedOverTotal}% </span>
            de la carrera!
          </h3>
        </div>
        <div className="w-full flex justify-center flex-col  items-center gap-4 py-5">
          <ProgressCustom
            progress={progressOverTotal}
            progressPassed={passedOverTotal}
          />
          <div
            className={`text-xl font-semibold transition-all items-center  bg-transparent flex-col flex-row justify-center`}
          >
            <div>{passedOverTotal}% promocionado</div>
            {progressOverTotal + passedOverTotal > 100 ? (
              "100%"
            ) : (
              <div>{progressOverTotal + passedOverTotal}% regularizado</div>
            )}
          </div>
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
