import { University } from "@/types/types";
import UniversityChooser from "./UniversityChooser";

export function UniversityList({
  universities,
}: {
  universities: University[];
}) {
  return (
    <div className="flex flex-col justify-center items-center sm:pt-16 pt-8 sm:gap-8 gap-4 text-text">
      <h2 className="sm:text-6xl text-3xl font-bold">¿En qué universidad estudiás?</h2>
      <p className="sm:text-2xl text-md font-semibold">Veamos cuántas materias te faltan para recibirte</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl px-4 pt-10">
        {universities.map((university) => (
          <UniversityChooser
            key={university.code}
            name={university.fullName}
            code={university.code}
            logo={university.logo}
          />
        ))}
      </div>
    </div>
  );
}
