export default function References() {
  return (
    <div className="flex-row flex gap-3">
      <div className="flex-row flex items-center gap-2">
        <div className="w-10 h-10 shadow-lg rounded-full bg-verde1"></div>
        <span className="text-lg font-semibold text-gray-700">
          Promocionada
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="w-10 h-10 shadow-lg rounded-full bg-amarillo"></div>
        <span className="text-lg font-semibold text-gray-700">
          Regularizada
        </span>
      </div>
    </div>
  );
}
