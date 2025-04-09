import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Check, School } from "lucide-react";

// Lista de colores disponibles
const iconColors = {
  sky: "bg-sky-100 text-sky-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  yellow: "bg-yellow-100 text-yellow-600",
  indigo: "bg-indigo-100 text-indigo-600",
  pink: "bg-pink-100 text-pink-600",
  // Agrega más colores según sea necesario
};

interface UniversityListItemProps {
  name: string;
  code: string;
  colorNum: number;
  isSelected: boolean;
}
export default function UniversityListItem({
  name,
  code,
  colorNum,
  isSelected,
}: UniversityListItemProps) {
  const color =
    Object.keys(iconColors)[colorNum % Object.keys(iconColors).length];

  return (
    <div
      className={`
              relative rounded-2xl overflow-hidden transition-all duration-300
              ${
                isSelected
                  ? "ring-2 ring-cyan-500 shadow-lg shadow-cyan-100 scale-[1.02]"
                  : "ring-1 ring-slate-200 shadow-sm hover:shadow-md"
              }
            `}
    >
      <label
        htmlFor={`${code}`}
        className="flex items-center p-6 cursor-pointer"
      >
        <div
          className={`mr-4 w-12 h-12 rounded-xl flex items-center justify-center ${
            iconColors[color as keyof typeof iconColors]
          }`}
        >
          <School className={`h-6 w-6`} />
        </div>

        <div className="flex-1">
          <h3 className="font-medium text-lg text-slate-800">{name}</h3>
        </div>

        <div className="ml-2 flex items-center justify-center">
          <RadioGroupItem value={code} id={code} className="sr-only" />
          <div
            className={`
                  w-6 h-6 rounded-full flex items-center justify-center
                  ${
                    isSelected
                      ? "bg-cyan-500 text-white"
                      : "border-2 border-slate-300"
                  }
                `}
          >
            {isSelected && <Check className="h-4 w-4" />}
          </div>
        </div>
      </label>
    </div>
  );
}
