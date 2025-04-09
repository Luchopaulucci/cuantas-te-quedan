"use client";
import { Degree } from "@/types/types";
import DegreeListItem from "./DegreeListItem";
import { useEffect } from "react";
import { useUniversityDegrees } from "@/hooks/useUniversityDegrees";
import { RadioGroup } from "@radix-ui/react-radio-group";

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

interface DegreeListProps {
  universityCode: string;
  selectedDegree: string | null;
  onSelectDegree: (degreeCode: string) => void;
}

export function DegreesList({
  universityCode,
  selectedDegree,
  onSelectDegree,
}: DegreeListProps) {
  const degrees: string[] = useUniversityDegrees(universityCode.toUpperCase());

  return (
    <RadioGroup
      value={selectedDegree || undefined}
      onValueChange={onSelectDegree}
      className="mt-1 space-y-4 w-full max-w-5xl mx-auto px-4"
    >
      {degrees.map((degree: string) => (
        <DegreeListItem
          key={degree}
          code={degree}
          name={degree}
          isSelected={selectedDegree === degree}
        />
      ))}
    </RadioGroup>
  );
}
