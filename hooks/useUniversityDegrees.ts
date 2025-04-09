import { useEffect, useState } from "react";
import universitiesData from "@/public/universitiesData.json";
export function useUniversityDegrees(universityCode: string) {
  const [degrees, setDegrees] = useState<string[]>([]);

  useEffect(() => {
    const degreesList = Object.values(universitiesData).flatMap((university) =>
      university.code === universityCode
        ? university.degrees.map((d) => d.degree)
        : []
    );

    setDegrees(degreesList);
  }, []);

  return degrees;
}
