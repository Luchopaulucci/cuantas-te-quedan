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
  const progressOverTotal = Math.floor((regular / subjectsTotal) * 100);

  return (
    <div className="h-max  flex flex-col justify-center items-center">
      <div className="w-full py-5">
        <div className="w-full flex justify-center">
          <h2 className="text-[clamp(1.5rem, 4vw, 3rem)] sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white tracking-wide">
            {degree.degree} <br />{" "}
            <span className="text-blue-900">{university}</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 text-lg sm:text-xl">
          <p className="text-gray-700 dark:text-gray-300">
            Materias aprobadas:{" "}
            <span className="font-semibold text-green-600">{passed}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Materias regularizadas:{" "}
            <span className="font-semibold text-yellow-600">{regular}</span>
          </p>
          <h3 className="text-gray-900 dark:text-white">
            ¡Aprobaste el{" "}
            <span className="font-bold text-blue-600">{passedOverTotal}%</span>{" "}
            de la carrera!
          </h3>
        </div>

        <div className="w-full flex justify-center flex-col  items-center gap-4 py-5">
          <ProgressCustom
            progress={progressOverTotal}
            progressPassed={passedOverTotal}
          />
          <div
            className={`text-xl font-semibold transition-all items-center  bg-transparent flex-col justify-center`}
          >
            <div>{Math.round(passedOverTotal)}% promocionado</div>
            <div>{Math.round(progressOverTotal)}% regularizado</div>
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
