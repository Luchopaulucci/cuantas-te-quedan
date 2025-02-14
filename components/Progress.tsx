"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressCustom({
  progressPassed,
  progress,
}: {
  progress: number;
  progressPassed: number;
}) {
  return (
    <div className="w-[90%] flex-col items-center justify-center">
      <div className="relative py-5">
        <Progress
          value={progress}
          color="bg-amarillo"
          className="h-6 absolute rounded-full shadow-lg"
        />
        <Progress
          value={progressPassed}
          className="h-6 absolute z-0 rounded-full shadow-lg"
          color="bg-verde1"
        />
      </div>
    </div>
  );
}
