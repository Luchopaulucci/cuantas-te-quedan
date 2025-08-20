import { CheckCircle } from "lucide-react";
import React from "react";

const statBadgeColors = {
  primary: "bg-sky-100 text-sky-700",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  error: "bg-error text-error-foreground",
};

interface StatBadgeProps {
  title: string;
  value: number;
  color?: keyof typeof statBadgeColors;
  icon?: React.ReactNode;
}
export default function StatBadge({
  title,
  value,
  color = "primary",
  icon = <CheckCircle className="h-12 w-12" />,
}: StatBadgeProps) {
  return (
    <div
      className={`p-6 rounded-xl md:h-auto shadow-sm ${statBadgeColors[color]} flex flex-row items-center justify-between`}
    >
      <div className="flex md:flex-col flex-row md:items-center items-center w-full justify-between gap-4 mr-2">
        <div className="">
          {icon}
          <h3 className="text-md font-medium">{title}</h3>
        </div>
        <span className="text-3xl  md:text-3xl font-extrabold ">{value}</span>
      </div>
    </div>
  );
}
