import { Degree } from "@/types/types";
import DegreeChooser from "./DegreeChooser";

export function DegreesList({ degrees }: { degrees: Degree[] }) {
  return (
    <div className="flex justify-center  items-center flex-col">
      <h2 className="text-3xl font-bold py-10"> Elegí tu carrera</h2>
      <div className="flex flex-col justify-center md:flex-row gap-2">
        {degrees.map((degree: Degree) => {
          return <DegreeChooser key={degree.degree} degree={degree} />;
        })}
      </div>
    </div>
  );
}
