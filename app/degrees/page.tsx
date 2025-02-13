"use client";
import { utnDegrees } from "@/public/utnDegrees.json";
import { umDegrees } from "@/public/umDegrees.json";
import { unCuyoDegrees } from "@/public/uncuyoDegrees.json";
import { useEffect, useState } from "react";
import { Degree } from "@/types/types";
import { DegreesList } from "@/components/DegreesList";

export default function Home() {
  const [degrees, setDegrees] = useState<Degree[] | null>(null);
  useEffect(() => {
    const universityCode = localStorage.getItem("university_choosen");
    if (universityCode === "UTN") {
      setDegrees(utnDegrees);
    } else if (universityCode === "UNCUYO") {
      setDegrees(unCuyoDegrees);
    } else if (universityCode === "UM") {
      setDegrees(umDegrees);
    }
  }, []);
  return degrees && <DegreesList degrees={degrees} />;
}
