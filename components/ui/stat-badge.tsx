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
      className={`p-6 rounded-xl shadow-sm ${statBadgeColors[color]} flex flex-row items-center justify-between`}
    >
      <div className="flex flex-col items-start">
        <h3 className="text-md font-medium">{title}</h3>
        <span className="text-5xl font-extrabold">{value}</span>
      </div>
      <div className="flex flex-col items-center justify-center">{icon}</div>
    </div>
  );
}
