"use client";
import SubjectsStats from "@/components/subjects/SubjectsStats";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSubjectsStatistics } from "@/hooks/useSubjectsStatistics";
import useUniversityDegreesSubjects from "@/hooks/useUniversityDegreesSubjects";
import { SubjectStatus } from "@/utils/constants";
import { createRef, useEffect, useState } from "react";
//@ts-expect-error error
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useUniversities } from "@/hooks/useUniversities";
import HeaderForScreenshot from "@/components/layout/HeaderScreenshot";
import Footer from "@/components/layout/Footer";
export default function SharePage() {
  // Loading data from localstorage
  const [storedValue] = useLocalStorage("subjects", {
    universityCode: null,
    degreeCode: null,
    subjectStatus: {},
  });
  const [universityCode, setUniversityCode] = useState<string | null>(null);
  const [subjectStatus, setSubjectStatus] = useState<
    Record<string, SubjectStatus | null>
  >({});
  const [degreeCode, setDegreeCode] = useState<string | null>(null);
  useEffect(() => {
    if (!storedValue || !storedValue.universityCode || !storedValue.degreeCode)
      return;

    setUniversityCode(storedValue.universityCode);
    setDegreeCode(storedValue.degreeCode);
    setSubjectStatus(storedValue.subjectStatus);
  }, [storedValue]);
  const universities = useUniversities();
  const [, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const ref = createRef<HTMLDivElement>();
  //@ts-expect-error can be null
  const { plans } = useUniversityDegreesSubjects(universityCode, degreeCode);
  const { subjectsTotal, subjectsPassed, subjectsRegular } =
    useSubjectsStatistics(subjectStatus, plans);
  const download = async (
    image: string,
    { name = "img", extension = "jpg" } = {}
  ) => {
    console.log(image);
    const a = document.createElement("a");
    a.href = image;
    const fileName = createFileName(extension, name);
    a.download = fileName;
    const file = dataUrlToFile(image, fileName);
    if ("canShare" in navigator) {
      await navigator.share({
        title: "¿Cuántas Te quedan?",
        url: "https://cuantas-te-quedan.vercel.app",
        files: [file],
      });
    } else {
      a.click();
    }
  };
  const university = universities.find((u) => u.code === universityCode);
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  console.log(storedValue);
  return (
    <div className="flex flex-col gap-3 items-center justify-start ">
      <Button
        className="absolute md:left-4 top-4 w-24  bg-sky-600"
        onClick={downloadScreenshot}
      >
        Compartir
      </Button>
      <div
        className="flex flex-col items-center justify-start pt-12 md:p-0 p-1 m-0 "
        ref={ref}
      >
        <div className="flex flex-col w-[80%] justify-start gap-1 min-h-screen">
          <HeaderForScreenshot />
          <h1 className="text-1xl font-bold  text-sky-700">
            {university?.name}{" "}
          </h1>
          <h1 className="text-1xl font-bold  text-sky-800">{degreeCode}</h1>

          <SubjectsStats
            passed={subjectsPassed}
            regular={subjectsRegular}
            subjectsTotal={subjectsTotal}
          />

          <Footer />
        </div>
      </div>
    </div>
  );
}
function dataUrlToFile(dataUrl: string, filename = "image.png"): File {
  // 1. Split "data:[<mime>][;base64],<data>"
  const [header, base64] = dataUrl.split(",");
  const mimeMatch = header.match(/data:(.*?)(;base64)?$/);
  const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream";

  // 2. Decode base‑64 → binary string
  const binary = atob(base64);

  // 3. Binary string → Uint8Array
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);

  // 4. Build Blob/File
  return new File([bytes], filename, { type: mime });
}
