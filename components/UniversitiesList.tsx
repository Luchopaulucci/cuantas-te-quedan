import { University } from "@/types/types";
import UniversityChooser from "./UniversityChooser";

export function UniversityList({
  universities,
}: {
  universities: University[];
}) {
  return (
    <div className="flex justify-center  items-center flex-col">
      <h2 className="text-3xl font-bold py-10"> Elegí tu Universidad</h2>
      <div className="flex flex-col justify-center md:flex-row gap-2">
        {universities.map((university) => {
          return (
            <UniversityChooser
              key={university.code}
              name={university.fullName}
              code={university.code}
            />
          );
        })}
      </div>
    </div>
  );
}
