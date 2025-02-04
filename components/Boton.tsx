type BotonProps = {
  titulo: string;
  onClick: () => void;
};

const Boton = ({ titulo, onClick }: BotonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-3 text-black font-semibold border-black border-solid border-x border-y sm:rounded-full rounded-xl bg-white hover:bg-slate-200 transition sm:w-full w-1/3"
    >
      {titulo}
    </button>
  );
};

export default Boton;
