"use client";
import { utnDegrees } from "../public/materias.json";
import CarreraChooser from "@/components/DegreeChooser";

export default function Home() {
  return (
    <div className="flex justify-center  items-center flex-col">
      <h2 className="text-3xl font-bold py-10"> Elegí tu carrera</h2>
      <div className="flex flex-col justify-center md:flex-row gap-2">
        {utnDegrees.map((degree) => {
          return <CarreraChooser key={degree.degree} name={degree.degree} />;
        })}
      </div>
    </div>
  );
}
