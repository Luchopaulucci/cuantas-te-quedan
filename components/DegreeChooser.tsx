import { Degree } from "@/types/types";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { redirect } from "next/navigation";

export default function DegreeChooser({ degree }: { degree: Degree }) {
  function handleOnClick(degree: Degree) {
    localStorage.setItem("choosen", JSON.stringify(degree));
    console.log("name", degree);
    redirect("/degree-progress");
  }
  return (
    <Card key={degree.degree}>
      <CardHeader>
        <CardTitle>{degree.degree}</CardTitle>
      </CardHeader>
      <CardContent className="flex-col gap-2 justify-center items-center">
        <Button onClick={() => handleOnClick(degree)}>
          Completar Materias
        </Button>
      </CardContent>
    </Card>
  );
}
