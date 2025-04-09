import React from "react";

export default function Header() {
  return (
    <header className="p-8">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
          Cuántas Te Quedan?
        </h1>
        <p className="mt-2 text-md text-slate-500 max-w-lg">
          Calculá cuántas materias te quedan para recibirte según las materias
          ya aprobadas y regularizadas
        </p>
      </div>
    </header>
  );
}
