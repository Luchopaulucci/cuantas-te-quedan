import Boton from "./Boton";

type MateriaProps = {
  /* codigo: number; */
  nombre: string;
  /* regimen: string; */
};

const Materia = ({ /* codigo, */ nombre, /* regimen  */}: MateriaProps) => {
    return (
        <div className="flex sm:flex-row flex-col justify-between items-center sm:w-full w-5/6 border-black border-solid border-x border-y sm:rounded-full rounded-xl p-3 gap-4">
          <div className="flex flex-col gap-6 w-full pl-2 text-center">
            {/* <p className=" text-slate-500">codigo: {codigo}</p> */}
            <h3 className="text-xl font-bold">{nombre}</h3>
            {/* <p className="text-slate-500">{regimen}</p> */}
          </div>
          <div className="flex sm:flex-row flex-col gap-4 sm:w-full w-1/3">
            <Boton titulo={"Regular"}/>
            <Boton titulo={"Aprobada"}/>
          </div>
        </div>
      );
      
};

export default Materia;
