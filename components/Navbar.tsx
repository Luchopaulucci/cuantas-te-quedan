import References from "./References";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full sm:py-5 py-3 bg-slate-100">
      <h1 className="sm:w-1/4 w-2/3 text-2xl font-extrabold text-center">
        materias tracker!!
      </h1>
      <References />
    </div>
  );
};

export default Navbar;
