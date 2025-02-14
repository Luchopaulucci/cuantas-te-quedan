const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Creado por alumnos de la{" "}
          <span className="text-blue-400">UTN de Mendoza</span>.
        </h1>
        <p className="flex items-center gap-2 text-lg sm:text-xl text-gray-300 mt-2">
          📌 <span>Mendoza, Argentina</span>
        </p>
        <p className="text-gray-400 text-base sm:text-lg mt-4">
          &copy; {new Date().getFullYear()} ¿Cuántas te quedan?
        </p>
      </div>
    </footer>
  );
};

export default Footer;
