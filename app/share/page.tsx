"use client";
import { SubjectContainerProps } from "@/components/subjects/SubjectContainer";
import SubjectsStats from "@/components/subjects/SubjectsStats";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSubjectsStatistics } from "@/hooks/useSubjectsStatistics";
import useUniversityDegreesSubjects from "@/hooks/useUniversityDegreesSubjects";
import { SubjectStatus } from "@/utils/constants";
import { createRef, useEffect, useState } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useUniversities } from "@/hooks/useUniversities";
import HeaderForScreenshot from "@/components/layout/HeaderScreenshot";
export default function SharePage({}: Omit<
  SubjectContainerProps,
  "setSubjectStatus"
>) {
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
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const ref = createRef();
  const { plans } = useUniversityDegreesSubjects(universityCode, degreeCode);
  const { subjectsTotal, subjectsPassed, subjectsRegular } =
    useSubjectsStatistics(subjectStatus, plans);
  window.addEventListener("load", onLoad);
  const download = async (image, { name = "img", extension = "jpg" } = {}) => {
    console.log(image);
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    if ("canShare" in navigator) {
      await navigator.share({ text: "Testing Cuantas Te quedan" });
    } else {
      a.click();
    }
  };
  const university = universities.find((u) => u.code === universityCode);
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  console.log(storedValue);
  return (
    <div className="flex flex-col pt-4 gap-3 items-center justify-center">
      <Button className="w-24  bg-sky-600" onClick={downloadScreenshot}>
        Compartir
      </Button>

      <div
        className="flex flex-col items-center justify-center p-1 m-0"
        ref={ref}
      >
        <div className="flex flex-col w-[90%] justify-center gap-1">
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
        </div>
      </div>
    </div>
  );
}

function onLoad() {
  console.log("loading");
  // Checkboxes disable and delete textfields.
  // if (navigator.share === undefined) {
  //   if (window.location.protocol === "http:") {
  //     // navigator.share() is only available in secure contexts.
  //     window.location.replace(window.location.href.replace(/^http:/, "https:"));
  //   }
  // }
}
function checkBasicFileShare() {
  // XXX: There is no straightforward API to do this.
  // For now, assume that text/plain is supported everywhere.
  const txt = new Blob(["Hello, world!"], { type: "text/plain" });
  // XXX: Blob support? https://github.com/w3c/web-share/issues/181
  const file = new File([txt], "test.txt");
  return navigator.canShare({ files: [file] });
}
