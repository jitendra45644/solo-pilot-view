
import { useState } from "react";
import { Task } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import TaskChecklistItem from "./TaskChecklistItem";
import { v4 as uuidv4 } from "uuid";

interface TaskChecklistProps {
  tasks: Task[];
  onChange: (tasks: Task[]) => void;
}

const TaskChecklist = ({ tasks, onChange }: TaskChecklistProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = () => {
    if (newTaskTitle.trim() === "") return;
    
    const newTask: Task = {
      id: uuidv4(),
      title: newTaskTitle.trim(),
      completed: false,
    };
    
    onChange([...tasks, newTask]);
    setNewTaskTitle("");
    setIsAdding(false);
  };

  const handleTaskChange = (updatedTask: Task) => {
    onChange(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId: string) => {
    onChange(tasks.filter((task) => task.id !== taskId));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask();
    } else if (e.key === "Escape") {
      setIsAdding(false);
      setNewTaskTitle("");
    }
  };

  return (
    <div className="space-y-1">
      {tasks.map((task) => (
        <TaskChecklistItem
          key={task.id}
          task={task}
          onChange={handleTaskChange}
          onDelete={handleDeleteTask}
        />
      ))}
      
      {isAdding ? (
        <div className="flex gap-2 items-center pt-2">
          <Input
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onBlur={() => {
              if (newTaskTitle.trim() === "") {
                setIsAdding(false);
              } else {
                handleAddTask();
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder="Enter task title..."
            autoFocus
            className="h-7 py-1"
          />
          <Button size="icon" className="h-7 w-7 shrink-0" onClick={handleAddTask}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={() => setIsAdding(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setIsAdding(true)}
        >
          <Plus className="h-4 w-4 mr-1" /> Add task
        </Button>
      )}
    </div>
  );
};

export default TaskChecklist;
