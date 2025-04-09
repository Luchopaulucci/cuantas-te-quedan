import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { BookOpen, Check, School } from "lucide-react";

interface DegreeListItemProps {
  name: string;
  code: string;
  isSelected: boolean;
}
export default function DegreeListItem({
  name,
  code,
  isSelected,
}: DegreeListItemProps) {
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
        className="flex items-center gap-2 p-6 cursor-pointer"
      >
        <div
          className={`bg-sky-100 text-sky-600 mr-4 w-12 h-12 rounded-xl flex items-center justify-center`}
        >
          <BookOpen className={`h-6 w-6`} />
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
