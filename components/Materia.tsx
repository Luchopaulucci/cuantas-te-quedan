import { Button } from "./Boton";

type MateriaProps = {
  name: string;
  code: number;
  status: any;
  handleStatus: any;
};

const Materia = ({ name, status, handleStatus, code }: MateriaProps) => {
  return (
    <div
      className={`flex sm:flex-row  flex-col justify-between items-center sm:w-full w-5/6 border-black  border-solid border-[1px] sm:rounded-full rounded-xl p-3 gap-4 transition
        ${
          status === "regular"
            ? "bg-amarillo"
            : status === "aprobada"
            ? "bg-verde1"
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
      ) : (
        <div>
          <Button title="Revertir" onClick={() => handleStatus(null, code)} />
        </div>
      )}
    </div>
  );
};

export default Materia;
