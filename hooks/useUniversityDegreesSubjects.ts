import { Plan } from "@/types/types";
import { useState, useEffect } from "react";

interface Subject {
  code: number;
  name: string;
  regimen: string | null;
  correlativas_regular: string[];
  correlativas_aprobada: string[];
}

interface Degree {
  degree: string;
  plan: Plan[];
}

interface University {
  code: string;
  name: string;
  degrees: Degree[];
}

interface UniversitiesData {
  [key: string]: University;
}

const useUniversityDegreesSubjects = (
  universityCode: string,
  degreeCode: string
) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch("/universitiesData.json");
        const universitiesData: UniversitiesData = await response.json();

        const degreeSubjects = Object.values(universitiesData).flatMap(
          (university) =>
            university.code === universityCode
              ? university.degrees
                  .map((d) => (d.degree === degreeCode ? d : null))
                  .filter((d) => d !== null)
              : []
        );

        // const university = data[collegeCode];
        // if (!university) {
        //   setError(`University with code "${collegeCode}" not found.`);
        //   return;
        // }

        // const degree = university.degrees.find(
        //   (d) =>
        //     d.degree === degreeIdentifier ||
        //     d.degree.toLowerCase() === degreeIdentifier.toLowerCase()
        // );

        // if (!degree) {
        //   setError(
        //     `Degree "${degreeIdentifier}" not found in university "${collegeCode}".`
        //   );
        //   return;
        // }

        setPlans(degreeSubjects[0].plan); // Assuming the first match is the desired one
        setError(null); // Clear any previous error
      } catch (err) {
        setError("Failed to fetch or parse universities data.");
      }
    };

    fetchPlan();
  }, [universityCode, degreeCode]);

  return { plans, error };
};

export default useUniversityDegreesSubjects;
