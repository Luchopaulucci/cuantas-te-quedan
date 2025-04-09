import React from "react";
import { Badge } from "./badge";

interface TabsCustomProps {
  tabs: string[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
}
export default function TabsCustom({
  tabs,
  selectedTab,
  onTabChange,
}: TabsCustomProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
              flex items-center gap-2 px-4 py-2 rounded-full transition-all whitespace-nowrap
              ${
                selectedTab === tab
                  ? "bg-sky-500 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-sky-50 border border-slate-200"
              }
            `}
        >
          <span>Year {tab}</span>
          <Badge
            variant="outline"
            className={`
                ${
                  selectedTab === tab
                    ? "bg-sky-400 text-white border-sky-300"
                    : "bg-slate-100 text-slate-700"
                }
              `}
          >
            {/* {getSelectedCountByYear(year)}/{subjectsByYear[year].length} */}
          </Badge>
        </button>
      ))}
    </div>
  );
}
