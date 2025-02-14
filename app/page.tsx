"use client";
import { useEffect, useState } from "react";
import { University } from "@/types/types";
import { UniversityList } from "@/components/UniversitiesList";

export default function Home() {
  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    fetch("/universities.json") // Cargar desde public/
      .then((res) => res.json())
      .then((data) => setUniversities(data.universities))
      .catch((err) => console.error("Error cargando universidades:", err));
  }, []);

  return <UniversityList universities={universities} />;
}
