"use client";
import { UniversityList } from "@/components/UniversitiesList";
import { universities } from "@/public/universities.json";
export default function Home() {
  return <UniversityList universities={universities} />;
}
