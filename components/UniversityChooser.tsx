import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { redirect } from "next/navigation";

export default function UniversityChooser({
  name,
  code,
  color,
}: {
  name: string;
  code: string;
  color: string;
}) {
  function handleOnClick(code: string) {
    localStorage.setItem("university_choosen", code);
    redirect("/degrees");
  }

  return (
    <Card key={code} className="shadow-lg transition-transform hover:scale-105">
      <CardHeader className={`p-4 text-white ${color} rounded-t-lg`}>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Button onClick={() => handleOnClick(code)} className={color}>
          Ver carreras
        </Button>
      </CardContent>
    </Card>
  );
}
