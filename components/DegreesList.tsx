import { Degree } from "@/types/types";
import DegreeChooser from "./DegreeChooser";

const colors = [
  "bg-blue-900",
  "bg-green-900",
  "bg-red-900",
  "bg-purple-900",
  "bg-yellow-900",
  "bg-indigo-900",
  "bg-pink-900",
  "bg-gray-900",
];

export function DegreesList({ degrees }: { degrees: Degree[] }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-3xl font-bold py-10"> Elegí tu carrera</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto px-4">
        {degrees.map((degree: Degree, index) => (
          <DegreeChooser
            key={degree.degree}
            degree={degree}
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
}
