"use client";
import MateriaContainer, {
  Subject,
  SubjectByYear,
} from "@/components/MateriaContainer";
import * as materias from "../public/materias.json";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export default function Home() {
  const [subStatus, setSubStatus] = useState<SubjectByYear[]>(
    materias.subjects
  );
  let passed = 0;
  let regular = 0;
  subStatus.forEach((subByYear) => {
    subByYear.subjects.forEach((sub) => {
      if (sub.status === "aprobada") {
        passed++;
      } else if (sub.status === "regular") {
        regular++;
      }
    });
  });
  console.log(passed);
  const passedOverTotal = Math.floor((passed / 36) * 100);
  return (
    <div className="h-max w-full flex flex-col justify-center items-center">
      <h3>Aprobaste el {passedOverTotal}% de la carrera!</h3>
      <Progress value={passedOverTotal} className="w-[80%]" />
      <h1 className="sm:text-8xl text-5xl font-bold text-black my-8">
        Cuántas te quedan??
      </h1>
      <h3 className="sm:text-4xl">Enviaselo a esa tia.</h3>
      <div className=" flex flex-col justify-center items-center w-4xl sm:gap-8 gap-4">
        <MateriaContainer subStatus={subStatus} setSubStatus={setSubStatus} />
      </div>
    </div>
  );
}
