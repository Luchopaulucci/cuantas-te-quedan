import { StepItem } from "@/types/types";
import React from "react";
import * as LucideIcons from "lucide-react";

interface StepCounterProps {
  currentStep: number;
  steps: StepItem[];
  defaultIcon?: keyof typeof LucideIcons;
}

export default function StepCounter({
  currentStep,
  steps,
  defaultIcon = "Dot",
}: StepCounterProps) {
  return (
    <div className="relative mb-10 px-8">
      <div className="flex justify-between">
        {steps.map((step, stepIndex) => {
          const isActive = currentStep === stepIndex + 1;
          const isCompleted = currentStep > stepIndex + 1;

          const Icon =
            (LucideIcons[step.icon] as React.FC<LucideIcons.LucideProps>) ||
            (LucideIcons[defaultIcon] as React.FC<LucideIcons.LucideProps>);
          return (
            <div key={stepIndex} className="flex flex-col items-center z-10">
              <div
                className={`
               w-16 h-16 rounded-2xl flex items-center justify-center mb-3
               transition-all duration-300 transform
               ${
                 isActive
                   ? "bg-gradient-to-br from-cyan-500 to-sky-600 text-white scale-110 shadow-lg"
                   : isCompleted
                   ? "bg-gradient-to-br from-cyan-400 to-sky-400 text-white"
                   : "bg-white text-slate-400 shadow-sm"
               }
             `}
              >
                <Icon className="h-7 w-7" />
              </div>
              <span
                className={`text-xs md:text-sm font-semibold ${
                  isActive ? "text-cyan-700" : "text-slate-600"
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}

        {/* Progress Bar */}
        <div className="absolute left-0 right-0 flex justify-center z-0">
          <div className="w-full h-1 bg-slate-200 mt-8">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-sky-600 transition-all duration-500"
              style={{
                width: `${(currentStep - 1) * (100 / (steps.length - 1))}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
