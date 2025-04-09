import { SubjectStatus } from "@/utils/constants";
import { Button } from "../Button";

type SubjectListItemProps = {
  name: string;
  code: number;
  status: SubjectStatus | null;
  handleStatus: (
    subjectCode: number,
    subjectStatus: SubjectStatus | null
  ) => void;
};

export default function SubjectListItem({
  name,
  status,
  handleStatus,
  code,
}: SubjectListItemProps) {
  const handleClick = (code: number, statusChange: SubjectStatus) => {
    handleStatus(code, status === statusChange ? null : statusChange);
  };

  const getStatusColor = (status: SubjectStatus) => {
    switch (status) {
      case SubjectStatus.REGULAR:
        return "ring-2 ring-yellow-500 shadow-md shadow-yellow-100 bg-yellow-50 scale-[1.02]";
      case SubjectStatus.PASSED:
        return "ring-2 ring-green-500 shadow-md shadow-green-100 bg-green-50 scale-[1.02]";
      default:
        return "ring-2 ring-slate-200 shadow-md hover:shadow-md";
    }
  };

  return (
    <div
      className={`
              flex flex-col md:flex-row gap-4 items-center p-6 cursor-pointer justify-between
        relative rounded-lg overflow-hidden transition-all duration-300
        ${getStatusColor(status || "default")}

      `}
    >
      <h3 className="font-medium text-md md:text-lg text-slate-800">{name}</h3>

      {/* Subject actions */}
      <div className="flex flex-row justify-center md:justify-end gap-2">
        <Button
          title="Regular"
          color="yellow"
          active={status === SubjectStatus.REGULAR}
          onClick={() => handleClick(code, SubjectStatus.REGULAR)}
        />
        <Button
          title="Promocionada"
          color="green"
          active={status === SubjectStatus.PASSED}
          onClick={() => handleClick(code, SubjectStatus.PASSED)}
        />
      </div>
    </div>
  );
}
