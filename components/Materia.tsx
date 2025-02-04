"use client";

import { useState } from "react";
import Boton from "./Boton";

type MateriaProps = {
  nombre: string;
};

const Materia = ({ nombre }: MateriaProps) => {
  const [estado, setEstado] = useState<"ninguno" | "regular" | "aprobada">(
    "ninguno"
  );

  return (
    <div
      className={`flex sm:flex-row flex-col justify-between items-center sm:w-full w-5/6 border-black border-solid border-x border-y sm:rounded-full rounded-xl p-3 gap-4 transition
        ${
          estado === "regular"
            ? "bg-amarillo"
            : estado === "aprobada"
            ? "bg-verde1"
            : "bg-white"
        }
      `}
    >
      <div className="flex flex-col gap-6 w-full pl-2 sm:text-left text-center">
        <h3 className="text-xl font-bold">{nombre}</h3>
      </div>
      <div className="flex flex-row justify-center gap-4 w-full">
        <Boton titulo="Regular" onClick={() => setEstado("regular")} />
        <Boton titulo="Aprobada" onClick={() => setEstado("aprobada")} />
      </div>
    </div>
  );
};

export default Materia;
