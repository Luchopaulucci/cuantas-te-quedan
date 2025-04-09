"use client";
import { useEffect, useState } from "react";
import { Step } from "@/types/types";
import { UniversityList } from "@/components/universities/UniversitiesList";
import StepCounter from "@/components/ui/step-counter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { DegreesList } from "@/components/degrees/DegreesList";
import DegreeContainer from "@/components/subjects/SubjectContainer";
import { SubjectStatus } from "@/utils/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [universityCode, setUniversityCode] = useState<string | null>(null);
  const [degreeCode, setDegreeCode] = useState<string | null>(null);
  const [subjectStatus, setSubjectStatus] = useState<
    Record<string, SubjectStatus | null>
  >({});

  const [storedValue, setSubjects] = useLocalStorage("subjects", {
    universityCode: null,
    degreeCode: null,
    subjectStatus: {},
  });

  // Loading data from localstorage
  useEffect(() => {
    if (!storedValue) return;

    setUniversityCode(storedValue.universityCode);
    setDegreeCode(storedValue.degreeCode);
    setSubjectStatus(storedValue.subjectStatus);
    setCurrentStep(3);
  }, [storedValue]);

  const handleSelectedUniversity = (code: string) => {
    setUniversityCode(code);
  };

  const handleSelectDegree = (code: string) => {
    if (degreeCode === code) return;

    // Reset subject status when changing degree
    setSubjectStatus({});
    setDegreeCode(code);
  };

  const steps: Step[] = [
    {
      title: "Universidades",
      description: "Selecciona tu universidad",
      children: (
        <UniversityList
          selectedUniversity={universityCode}
          onSelectUniversity={handleSelectedUniversity}
        />
      ),
      icon: "GraduationCap",
      isActive: true,
    },
    {
      title: "Carreras",
      description: "Selecciona tu carrera",
      children: (
        <DegreesList
          universityCode={universityCode ? universityCode : ""}
          selectedDegree={degreeCode}
          onSelectDegree={handleSelectDegree}
        />
      ),
      icon: "BookOpen",
      isActive: true,
    },
    {
      title: "Materias",
      description: "Selecciona tu materia",
      children: (
        <DegreeContainer
          subjectStatus={subjectStatus}
          setSubjectStatus={setSubjectStatus}
          universityCode={universityCode ? universityCode : ""}
          degreeCode={degreeCode ? degreeCode : ""}
        />
      ),

      icon: "SquareCheckBig",
      isActive: true,
    },
  ];

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return !!universityCode;
      case 2:
        return !!degreeCode;
      default:
        return false;
    }
  };
  const goToNextStep = () => {
    if (!canProceedToNextStep()) return;

    setCurrentStep((prev) => prev + 1);
  };

  const Icon =
    (LucideIcons[
      steps[currentStep - 1].icon
    ] as React.FC<LucideIcons.LucideProps>) ||
    (LucideIcons["Dot"] as React.FC<LucideIcons.LucideProps>);

  return (
    <section>
      <StepCounter
        currentStep={currentStep}
        steps={steps.map((step) => ({ title: step.title, icon: step.icon }))}
      />

      <Card className="rounded-3xl bg-white shadow-lg">
        <CardContent>
          <div className="flex gap-4 items-center py-6 px-8">
            <div
              className={`
                  w-10 h-10 rounded-xl flex items-center justify-center bg-sky-100 text-sky-600
                `}
            >
              <Icon className="h-7 w-7" />
            </div>

            <div className="flex flex-col text-start justify-center">
              <h2 className="text-2xl font-bold text-slate-800">
                {steps[currentStep - 1].title}
              </h2>
              <p>{steps[currentStep - 1].description}</p>
            </div>
          </div>
          {steps[currentStep - 1].children}
        </CardContent>
        <CardFooter className="flex justify-between mt-8 bg-slate-50 w-full rounded-b-3xl p-6">
          <Button
            variant="outline"
            disabled={currentStep === 1}
            onClick={() => {
              if (currentStep === 1) return;
              setCurrentStep((prev) => prev - 1);
            }}
            className="rounded-xl px-5 py-6 text-slate-700 border-slate-300 hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Volver
          </Button>

          {currentStep < steps.length && (
            <Button
              onClick={goToNextStep}
              disabled={!canProceedToNextStep()}
              className={`rounded-xl px-5 py-6 ${
                canProceedToNextStep()
                  ? "bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700"
                  : "bg-slate-300 text-slate-500"
              }`}
            >
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {/* TODO: Guardar en localstorage */}
          {currentStep === steps.length && (
            <Button
              onClick={() => {
                setSubjects({
                  universityCode,
                  degreeCode,
                  subjectStatus,
                });
              }}
              className={`rounded-xl px-5 py-6 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700`}
            >
              Guardar ✨
            </Button>
          )}
        </CardFooter>
      </Card>
    </section>
  );
}
