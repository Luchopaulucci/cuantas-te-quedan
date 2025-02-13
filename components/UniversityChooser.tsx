import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { redirect } from "next/navigation";

export default function UniversityChooser({
  name,
  code,
}: {
  name: string;
  code: string;
}) {
  function handleOnClick(code: string) {
    localStorage.setItem("university_choosen", code);
    redirect("/degrees");
  }
  return (
    <Card key={code}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardTitle>{code}</CardTitle>
      </CardHeader>
      <CardContent className="flex-col gap-2 justify-center items-center">
        <Button onClick={() => handleOnClick(code)}>Ver carreras</Button>
      </CardContent>
    </Card>
  );
}
