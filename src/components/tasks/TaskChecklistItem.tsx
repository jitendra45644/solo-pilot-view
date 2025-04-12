
import { useState } from "react";
import { Task } from "@/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Calendar, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

interface TaskChecklistItemProps {
  task: Task;
  onChange: (updatedTask: Task) => void;
  onDelete: (id: string) => void;
}

const TaskChecklistItem = ({ task, onChange, onDelete }: TaskChecklistItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleTitleChange = () => {
    if (title.trim() === "") {
      setTitle(task.title);
      setIsEditing(false);
      return;
    }

    onChange({
      ...task,
      title: title.trim(),
    });
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTitleChange();
    } else if (e.key === "Escape") {
      setTitle(task.title);
      setIsEditing(false);
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    onChange({
      ...task,
      completed: checked,
    });
    
    toast(checked ? "Task completed!" : "Task marked as incomplete");
  };

  return (
    <div className="group flex items-start gap-2 py-2">
      <Checkbox
        checked={task.completed}
        onCheckedChange={handleCheckboxChange}
        className="mt-1"
      />
      
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleChange}
            onKeyDown={handleKeyDown}
            autoFocus
            className="h-7 py-1"
          />
        ) : (
          <div
            onClick={() => setIsEditing(true)}
            className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""} cursor-pointer`}
          >
            {task.title}
          </div>
        )}
        
        {task.dueDate && (
          <div className="flex items-center mt-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{format(new Date(task.dueDate), "MMM d, yyyy")}</span>
          </div>
        )}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="opacity-0 group-hover:opacity-100 h-6 w-6"
        onClick={() => onDelete(task.id)}
      >
        <Trash2 className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default TaskChecklistItem;
