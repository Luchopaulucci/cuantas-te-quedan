import { useEffect, useState } from "react";
import universitiesData from "@/public/universitiesData.json";
export function useUniversityDegrees(universityCode: string) {
  const [degrees, setDegrees] = useState<string[]>([]);
  console.log(universityCode);
  useEffect(() => {
    const degreesList = Object.values(universitiesData).flatMap((university) =>
      university.code.toUpperCase() === universityCode
        ? university.degrees.map((d) => d.degree)
        : []
    );

    setDegrees(degreesList);
  }, []);

  return degrees;
}
