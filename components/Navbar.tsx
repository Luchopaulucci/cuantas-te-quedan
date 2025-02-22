"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row h-20 items-center justify-evenly w-full border-b border-accentColor text-text">
      {/* Ocultar "Inicio" si la ruta es "/" */}
      {pathname !== "/" && (
        <h1 className="sm:text-3xl text-1xl">
          <Link href="/" className="font-extrabold text-accentColor hover:text-green-600 transition">
            Inicio
          </Link>
        </h1>
      )}
      <h1 className="sm:text-4xl text-2xl text-center">
        <span className="font-extrabold">¿Cuántas te quedan?</span>
      </h1>
    </div>
  );
};

export default Navbar;
