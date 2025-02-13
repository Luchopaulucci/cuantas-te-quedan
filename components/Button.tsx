type BotonProps = {
  title: string;
  onClick: () => void;
  variant?: "destructive";
};

export const Button = ({ title, onClick }: BotonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-3 text-white bg-black font-semibold border-black border-solid border-x border-y rounded-full   hover:scale-105 transition sm:w-full w-36"
    >
      {title}
    </button>
  );
};
