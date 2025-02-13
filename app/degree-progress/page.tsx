"use client";

import { useEffect, useState } from "react";
import DegreeContainer from "@/components/DegreeContainer";
import { Degree } from "@/types/types";

export default function Home() {
  const [degree, setDegree] = useState<Degree | null>(null);
  useEffect(() => {
    const degree = localStorage.getItem("choosen");
    if (degree) {
      setDegree(JSON.parse(degree));
    }
  }, []);
  return degree && <DegreeContainer degree={degree} />;
}
