import { Button } from "./ui/button";
import { CardHeader, CardTitle } from "./ui/card";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function UniversityChooser({
  name,
  code,
  logo,
}: {
  name: string;
  code: string;
  logo: string;
}) {
  function handleOnClick(code: string) {
    localStorage.setItem("university_choosen", code);
    redirect("/degrees");
  }

  return (
    <Button key={code} onClick={() => handleOnClick(code)} className="flex flex-col justify-between items-center p-5 gap-2 bg-secondaryColor shadow-lg shadow-accentColor/50 transition duration-300 hover:scale-105 h-full">
      <Image src={logo} width={45} height={45} alt="Logo Universidad" />
      <CardHeader className="text-white">
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      </CardHeader>
    </Button>
  );
}
