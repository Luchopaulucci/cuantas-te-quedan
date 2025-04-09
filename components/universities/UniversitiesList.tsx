import UniversityListItem from "./UniversityListItem";
import { useUniversities } from "@/hooks/useUniversities";
import { RadioGroup } from "@radix-ui/react-radio-group";

interface UniversityListProps {
  selectedUniversity: string | null;
  onSelectUniversity: (code: string) => void;
}

export function UniversityList({
  selectedUniversity,
  onSelectUniversity,
}: UniversityListProps) {
  const universities = useUniversities();

  return (
    <RadioGroup
      value={selectedUniversity || undefined}
      onValueChange={onSelectUniversity}
      className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto px-4"
    >
      {universities.map((university, index) => (
        <UniversityListItem
          key={university.code}
          isSelected={selectedUniversity === university.code}
          code={university.code}
          name={university.name}
          colorNum={index}
        />
      ))}
    </RadioGroup>
  );
}
