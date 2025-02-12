type BotonProps = {
  title: string;
  onClick: () => void;
  variant?: "destructive";
};

export const Button = ({ title, onClick }: BotonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-3 text-white bg-black font-semibold border-black border-solid border-x border-y sm:rounded-full rounded-xl  hover:scale-105 transition sm:w-full w-1/3"
    >
      {title}
    </button>
  );
};
