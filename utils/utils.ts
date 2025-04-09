export const transformYearString = (yearString: string): string => {
  const stringYear = yearString.split(" ")[0].toLowerCase();
  const numberYears = {
    primer: "1er",
    segundo: "2do",
    tercer: "3er",
    cuarto: "4to",
    quinto: "5to",
    sexto: "6to",
    séptimo: "7mo",
    octavo: "8vo",
    noveno: "9no",
    décimo: "10mo",
  };

  const newYear: string =
    stringYear in numberYears
      ? numberYears[stringYear as keyof typeof numberYears]
      : stringYear;

  return newYear + " " + yearString.split(" ")[1];
};
