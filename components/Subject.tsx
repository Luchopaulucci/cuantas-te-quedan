import { SubjectStatus } from "@/types/types";
import { Button } from "./Button";

type MateriaProps = {
  name: string;
  code: number;
  status: SubjectStatus | undefined;
  handleStatus: (e: SubjectStatus, code: number) => void;
};

const Materia = ({ name, status, handleStatus, code }: MateriaProps) => {
  return (
    <div
      className={`flex sm:flex-row  flex-col justify-between items-center w-full  border-black  border-solid border-[1px] rounded-full  p-3 gap-4 transition
        ${
          status === "regular"
            ? "bg-amarillo border-amarillo"
            : status === "aprobada"
            ? "bg-verde1 border-verde1"
            : "bg-white"
        }
      `}
    >
      <div className="flex flex-col gap-6 w-full pl-2 sm:text-left text-center">
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      {!status ? (
        <div className="flex flex-row justify-center gap-1 w-full">
          <Button
            title={"Regular"}
            onClick={() => handleStatus("regular", code)}
          />
          <Button
            title="Promocionada"
            onClick={() => handleStatus("aprobada", code)}
          />
        </div>
      ) : status !== "regular" ? (
        <Button title="Revertir" onClick={() => handleStatus(null, code)} />
      ) : (
        <div className="flex flex-row justify-center gap-1 w-full">
          <Button title="Revertir" onClick={() => handleStatus(null, code)} />
          <Button
            title="Promocionada"
            onClick={() => handleStatus("aprobada", code)}
          />
        </div>
      )}
    </div>
  );
};

export default Materia;
