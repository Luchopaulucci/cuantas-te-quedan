const Footer = () => {
  return (
    <div className="h-56 bg-black text-white gap-2 py-10 mt-10 flex flex-col text-2xl items-center justify-end">
      <h1> Hecho por alumnos de la UTN de Mendoza. </h1>
      <h1>📌 Mendoza, Argentina</h1>
      <h2>{new Date().getFullYear()}</h2>
    </div>
  );
};

export default Footer;
