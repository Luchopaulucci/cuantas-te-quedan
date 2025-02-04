import Boton from "./Boton";

type MateriaProps = {
  codigo: number;
  nombre: string;
  regimen: string;
};

const Materia = ({ codigo, nombre, regimen }: MateriaProps) => {
    return (
        <div className="flex flex-row justify-between items-center gap-8 w-full border-black border-solid outline rounded-md p-5">
          <div className="flex flex-col gap-6 w-full">
            <p className=" text-slate-500">codigo: {codigo}</p>
            <h3 className="text-xl font-bold">{nombre}</h3>
            <p className="text-slate-500">{regimen}</p>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <Boton titulo={"Regular"}/>
            <Boton titulo={"Aprobada"}/>
          </div>
        </div>
      );
      
};

export default Materia;
