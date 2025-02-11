"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressCustom({ progress }: { progress: number }) {
  return (
    <div className="relative w-[60%]">
      <Progress value={progress} className="h-6" />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
