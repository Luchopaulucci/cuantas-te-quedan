"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row h-24 items-center justify-center w-full py-5 bg-white shadow-sm">
      {/* Ocultar "Inicio" si la ruta es "/" */}
      {pathname !== "/" && (
        <h1 className="w-2/3 sm:text-4xl text-2xl text-center hover:scale-105 transition-transform">
          <Link
            href="/"
            className="font-extrabold text-blue-900 hover:text-blue-800"
          >
            Inicio
          </Link>
        </h1>
      )}
      <h1 className="w-2/3 sm:text-4xl text-2xl text-center">
        <span className="font-extrabold">¿Cuántas te quedan?</span>
      </h1>
    </div>
  );
};

export default Navbar;
