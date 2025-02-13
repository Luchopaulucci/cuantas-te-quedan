"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, color, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-transparent border-black border-[1px]",
      className
    )}
    {...props}
  >
    <div
      className={`text-xs z-1 font-semibold text-${color?.slice(
        3
      )} transition-all bg-transparent flex flex-row justify-end`}
      style={{ width: `${value}%`, color: `${color?.slice(3)}` }}
    >
      {Math.round(value!)}%
    </div>
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 transition-all z-0", color)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
