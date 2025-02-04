import Materia from "../components/Materia";
import Materias from "../public/materias.json";

export default function Home() {
  return (
    <div className="h-max w-full flex flex-col justify-center items-center">
      <h1 className="sm:text-8xl text-5xl font-bold text-black my-8">
        UTNTracker
      </h1>
      <div className=" flex flex-col justify-center items-center w-4xl sm:gap-8 gap-4">
        {Object.entries(Materias.materias).map(([anio, materias]) => (
          <div key={anio} className="w-full">
            {/* Título del Año */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 capitalize my-4 text-center">
              {anio.replace("_", " ")}
            </h2>

            {/* Lista de Materias */}
            <div className="flex flex-col gap-4 w-full">
              {materias.map((materia) => (
                <div
                  key={materia.codigo}
                  className="w-full max-w-[500px] mx-auto"
                >
                  <Materia nombre={materia.nombre} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
