import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row h-24 items-center justify-center w-full py-5 bg-white">
      <h1 className="w-2/3 text-4xl text-center hover:scale-105">
        <Link href={"/"} className="font-extrabold">
          {" "}
          Inicio{" "}
        </Link>
      </h1>
      <h1 className="w-2/3 text-4xl text-center">
        <span className="font-extrabold"> ¿Cuántas te quedan? </span>{" "}
      </h1>
    </div>
  );
};

export default Navbar;
