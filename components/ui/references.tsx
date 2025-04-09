interface Reference {
  title: string;
  color: keyof typeof referenceColors;
}
interface ReferencesProps {
  references: Reference[];
}

const referenceColors = {
  green: "bg-green-300",
  yellow: "bg-yellow-300",
  red: "bg-red-300",
  blue: "bg-blue-300",
  purple: "bg-purple-300",
};

export default function References({ references }: ReferencesProps) {
  return (
    <div className="flex-row flex gap-3 text-sm">
      {references.map((reference, index) => (
        <div key={index} className="flex-row flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full ${
              referenceColors[reference.color]
            }`}
          ></div>
          <span className="text-white font-medium">{reference.title}</span>
        </div>
      ))}
    </div>
  );
}
