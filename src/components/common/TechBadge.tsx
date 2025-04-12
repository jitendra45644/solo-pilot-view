
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface TechBadgeProps {
  tech: string;
  onRemove?: (tech: string) => void;
  className?: string;
}

const TechBadge = ({ tech, onRemove, className = "" }: TechBadgeProps) => {
  return (
    <Badge 
      variant="secondary" 
      className={`flex items-center ${onRemove ? 'pr-1' : 'pr-3'} ${className}`}
    >
      <span className="mr-1">{tech}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(tech);
          }}
          className="text-muted-foreground hover:text-foreground ml-1"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </Badge>
  );
};

export default TechBadge;
