
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import TechBadge from "./TechBadge";

interface TechStackProps {
  techStack: string[];
  onChange: (techStack: string[]) => void;
}

const TechStack = ({ techStack, onChange }: TechStackProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTech = () => {
    const tech = inputValue.trim();
    if (!tech || techStack.includes(tech)) {
      setInputValue("");
      return;
    }
    
    onChange([...techStack, tech]);
    setInputValue("");
  };

  const handleRemoveTech = (tech: string) => {
    onChange(techStack.filter((t) => t !== tech));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTech();
    } else if (e.key === "," || e.key === " ") {
      e.preventDefault();
      handleAddTech();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <TechBadge key={tech} tech={tech} onRemove={handleRemoveTech} />
        ))}
        
        <div className="flex items-center border border-input rounded-md pl-3 pr-2 h-8 bg-background">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => inputValue.trim() && handleAddTech()}
            onKeyDown={handleKeyDown}
            placeholder="Add technology..."
            className="border-0 h-full p-0 focus-visible:ring-0 text-sm"
          />
          <button
            type="button"
            onClick={handleAddTech}
            className="text-muted-foreground hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">
        Press Enter or comma to add
      </p>
    </div>
  );
};

export default TechStack;
