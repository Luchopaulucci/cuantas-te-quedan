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
    <div className="w-full relative bg-sky-400 h-4 rounded-full">
      <Progress
        value={progress + progressPassed}
        color="bg-white-100"
        className="absolute h-full"
      />
      <Progress
        value={progressPassed}
        color="bg-green-300"
        className="absolute h-full"
      />
    </div>
  );
}
