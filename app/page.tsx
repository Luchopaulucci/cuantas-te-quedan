import Materia from "@/components/Materia";
import Materias from "../data/materias.json"

export default function Home() {
  return (
    <div className="h-max w-full flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-blue-400 my-8">UTNTracker</h1>
      <div className=" flex flex-col justify-center items-center w-3xl gap-8">
      {Materias.materias.map((materia) => (
        <Materia
        key={materia.codigo}
        codigo={materia.codigo}
        nombre={materia.nombre}
        regimen={materia.regimen}
        />
      ))}
      </div>
    </div>
  );
}
