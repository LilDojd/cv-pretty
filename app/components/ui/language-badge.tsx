import { Badge } from "./badge";

interface LanguageBadgeProps {
  language: {
    name: string;
    type: "spoken" | "programming";
    proficiency?: number;
  };
  isSpoken?: boolean;
}

function LanguageBadge({ language, isSpoken }: LanguageBadgeProps) {
  return (
    <Badge variant={isSpoken ? "secondary" : "default"}>
      {language.name}
      <div className="ml-0.5 flex justify-start">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`print:text-primary ml-0.5 h-1 w-1 rounded-full print:visible ${
              index < (language.proficiency || 0)
                ? "bg-green-500"
                : "bg-green-500/30"
            }`}
          ></div>
        ))}
      </div>
    </Badge>
  );
}

export default LanguageBadge;
