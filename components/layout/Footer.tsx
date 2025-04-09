const Footer = () => {
  return (
    <footer className="mt-4 py-8">
      <p className="text-md font-medium text-slate-800">
        Creado por alumnos de la{" "}
        <span className="font-bold text-cyan-500">UTN de Mendoza</span>.
      </p>
      <p>📌 Mendoza, Argentina</p>
      <p className="text-slate-700">
        &copy; {new Date().getFullYear()} ¿Cuántas te quedan?
      </p>
    </footer>
  );
};

export default Footer;
