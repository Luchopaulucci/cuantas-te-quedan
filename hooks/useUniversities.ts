import { useState, useEffect } from "react";
import universitiesData from "@/public/universitiesData.json";

export function useUniversities() {
  const [universities, setUniversities] = useState<
    { code: string; name: string }[]
  >([]);

  useEffect(() => {
    const universitiesList = Object.entries(universitiesData).map(
      ([code, university]) => ({
        code: code,
        name: university.name,
      })
    );
    setUniversities(universitiesList);
  }, []);

  return universities;
}
