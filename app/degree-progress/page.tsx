"use client";
import { utnDegrees } from "@/public/materias.json";
import { useEffect, useState } from "react";
import DegreeContainer from "@/components/DegreeContainer";
import { Degree } from "@/types/types";

export default function Home() {
  const [degree, setDegree] = useState<Degree | null>(null);
  useEffect(() => {
    const degreeName = localStorage.getItem("choosen");
    const degree = utnDegrees.find((degree) => degree.degree === degreeName);
    if (degree) {
      setDegree(degree);
    }
  }, []);
  return degree && <DegreeContainer degree={degree} />;
}
