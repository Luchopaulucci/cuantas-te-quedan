type BotonProps = {
  titulo: string;
};

const Boton = ({ titulo }: BotonProps) => {
  return (
    <button className="p-5 bg-slate-600 text-white rounded-md hover:bg-slate-500 transition w-full">
      {titulo}
    </button>
  );
};

export default Boton;
