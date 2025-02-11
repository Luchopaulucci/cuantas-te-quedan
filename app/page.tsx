"use client";
import MateriaContainer, { SubjectByYear } from "@/components/MateriaContainer";
import * as materias from "../public/materias.json";
import { useState } from "react";
import References from "@/components/References";
import { ProgressCustom } from "@/components/Progress";

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
    <div className="h-max  flex flex-col justify-center items-center">
      {/* <h1 className="sm:text-6xl  font-bold text-black my-8">
        ¿Cuántas te quedan?
      </h1> */}
      <div className="w-full py-5">
        <h2 className="text-4xl  flex text-center">
          {" "}
          Ingeniería en Sistemas 2025
        </h2>
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
        <MateriaContainer subStatus={subStatus} setSubStatus={setSubStatus} />
      </div>
    </div>
  );
}
