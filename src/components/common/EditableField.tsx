
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";

interface EditableFieldProps {
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  className?: string;
  placeholder?: string;
}

const EditableField = ({ 
  value, 
  onChange, 
  multiline = false, 
  className = "",
  placeholder = "Enter value..."
}: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);

  const handleBlur = () => {
    onChange(text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (multiline) return;
    if (e.key === "Enter") {
      handleBlur();
    } else if (e.key === "Escape") {
      setText(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    if (multiline) {
      return (
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className={className}
          placeholder={placeholder}
        />
      );
    }

    return (
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className={className}
        placeholder={placeholder}
      />
    );
  }

  return (
    <div
      className={`group cursor-pointer rounded px-3 py-2 border border-transparent hover:border-border/30 ${className}`}
      onClick={() => setIsEditing(true)}
    >
      {value ? (
        <div className="flex justify-between items-center gap-2">
          <div className={multiline ? "whitespace-pre-wrap" : ""}>{value}</div>
          <Pencil className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100" />
        </div>
      ) : (
        <span className="text-muted-foreground flex items-center gap-1">
          {placeholder}
          <Pencil className="h-3.5 w-3.5" />
        </span>
      )}
    </div>
  );
};

export default EditableField;
