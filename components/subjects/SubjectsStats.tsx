import React from "react";
import { ProgressCustom } from "../ui/progress-custom";
import { Award, BookOpen, Clock, TrendingUp } from "lucide-react";
import StatBadge from "../ui/stat-badge";

interface SubjectsStatProps {
  subjectsTotal: number;
  passed: number;
  regular: number;
}
export default function SubjectsStats({
  subjectsTotal,
  passed,
  regular,
}: SubjectsStatProps) {
  const passedOverTotal = Math.floor((passed / subjectsTotal) * 100);
  const progressOverTotal = Math.floor((regular / subjectsTotal) * 100);
  return (
    <>
      {/* Stats list */}

      <div className="bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl p-6  mt-4">
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 text-white">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h3 className="text-white font-semibold text-start text-xl">
            Tu Progreso
          </h3>
        </div>
        {/* Progress bar */}
        <div className="">
          <div className="flex justify-between items-end mt-4">
            <p className="text-md sm:text-lg font-medium text-cyan-100 pb-3 text-center mt-2">
              {subjectsTotal - passed} materias para recibirte
            </p>
            <span className="block text-white font-bold text-3xl pb-3">
              {passedOverTotal}%
            </span>
          </div>
          <ProgressCustom
            progress={progressOverTotal}
            progressPassed={passedOverTotal}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-4 gap-2 pt-4 text-center">
          <StatBadge
            title="Total"
            value={subjectsTotal}
            icon={<BookOpen className="h-10 w-10" />}
          />
          <StatBadge
            title="Aprobadas"
            value={passed}
            color="success"
            icon={<Award className="h-10 w-10" />}
          />
          <StatBadge
            title="Regularizadas"
            value={regular}
            color="warning"
            icon={<Clock className="h-10 w-10" />}
          />
        </div>
      </div>
    </>
  );
}
