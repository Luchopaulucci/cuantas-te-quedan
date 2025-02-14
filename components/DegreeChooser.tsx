import { Degree } from "@/types/types";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { redirect } from "next/navigation";

export default function DegreeChooser({
  degree,
  color,
}: {
  degree: Degree;
  color: string;
}) {
  function handleOnClick(degree: Degree) {
    localStorage.setItem("choosen", JSON.stringify(degree));
    console.log("name", degree);
    redirect("/degree-progress");
  }

  return (
    <Card
      key={degree.degree}
      className="shadow-lg transition-transform hover:scale-105"
    >
      <CardHeader className={`p-4 text-white ${color} rounded-t-lg`}>
        <CardTitle className="text-xl font-semibold">{degree.degree}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Button onClick={() => handleOnClick(degree)} className={color}>
          Completar Materias
        </Button>
      </CardContent>
    </Card>
  );
}
