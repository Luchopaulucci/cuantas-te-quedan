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
    <div className="w-[90%] flex-col items-start">
      <div className="relative py-5">
        <Progress
          value={progress}
          color="bg-amarillo"
          className="h-6 absolute"
        />
        <Progress
          value={progressPassed}
          className="h-6 absolute"
          color="bg-verde1"
        />
      </div>
    </div>
  );
}
