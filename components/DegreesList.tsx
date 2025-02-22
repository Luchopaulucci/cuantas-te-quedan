import { Degree } from "@/types/types";
import DegreeChooser from "./DegreeChooser";

export function DegreesList({ degrees }: { degrees: Degree[] }) {
  return (
    <div className="flex flex-col justify-center items-center sm:pt-16 pt-8 sm:gap-8 gap-4 text-text">
          <h2 className="sm:text-6xl text-3xl font-bold">¿Cual carrera estudiás?</h2>
          <p className="sm:text-2xl text-md font-semibold">Veamos cuántas materias te faltan para recibirte</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto px-4 pt-10">
            {degrees.map((degree: Degree) => (
              <DegreeChooser
                key={degree.degree}
                degree={degree}
              />
            ))}
          </div>
    </div>
  );
}
