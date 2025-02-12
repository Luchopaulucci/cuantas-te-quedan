import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function CarreraChooser({ name }: { name: string }) {
  function handleOnClick(name: string) {
    localStorage.setItem("choosen", name);
    redirect("/degree-progress");
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-col gap-2 justify-center items-center">
        <Button onClick={() => handleOnClick(name)}>Completar Materias</Button>
      </CardContent>
    </Card>
  );
}
