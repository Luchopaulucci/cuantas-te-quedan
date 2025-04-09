type BotonProps = {
  title: string;
  color?: string;
  active: boolean;
  onClick: () => void;
  variant?: "destructive";
};

export const Button = ({ title, color, onClick, active }: BotonProps) => {
  const borderColors = {
    yellow: `border-yellow-600 ${
      active
        ? "!bg-gradient-to-br from-yellow-500 to-yellow-600 text-white"
        : "text-yellow-500 hover:bg-yellow-50"
    }`,
    green: `border-green-600 text-green-600 ${
      active
        ? "!bg-gradient-to-br from-green-500 to-green-600 text-white"
        : "text-green-600 hover:bg-green-50"
    }`,
  };
  return (
    <button
      onClick={onClick}
      className={`px-4 bg-gradient py-2 border bg-white ${
        color
          ? borderColors[color as keyof typeof borderColors]
          : "border-gray-400"
      } font-semibold !text-xs rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400`}
    >
      {title}
    </button>
  );
};
