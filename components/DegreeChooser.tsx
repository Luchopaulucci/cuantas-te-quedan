import { Degree } from "@/types/types";
import { Button } from "./ui/button";
import { CardHeader, CardTitle } from "./ui/card";
import { redirect } from "next/navigation";

export default function DegreeChooser({
  degree,
}: {
  degree: Degree;
}) {
  function handleOnClick(degree: Degree) {
    localStorage.setItem("choosen", JSON.stringify(degree));
    console.log("name", degree);
    redirect("/degree-progress");
  }

  return (
    <Button key={degree.degree} onClick={() => handleOnClick(degree)} className="flex flex-col justify-center items-center p-5 gap-2 bg-secondaryColor shadow-lg shadow-accentColor/50 transition duration-300 hover:scale-105 h-full">
      <CardHeader className="text-white text-wrap">
        <CardTitle className="text-xl font-semibold">{degree.degree}</CardTitle>
      </CardHeader>
    </Button>
  );
}
