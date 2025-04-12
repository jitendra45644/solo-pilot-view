
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { TaskWithProject } from "@/types";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CalendarDayProps {
  date: Date;
  isCurrentMonth: boolean;
  tasks: TaskWithProject[];
}

const CalendarDay = ({ date, isCurrentMonth, tasks }: CalendarDayProps) => {
  const isToday = format(new Date(), "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
  
  return (
    <div 
      className={`border rounded min-h-24 p-1 ${
        isCurrentMonth ? "bg-secondary/20" : "bg-secondary/5 text-muted-foreground"
      } ${isToday ? "border-primary/50" : "border-border/30"}`}
    >
      <div className="text-right text-xs mb-1">
        {format(date, "d")}
      </div>
      
      <div className="space-y-1">
        {tasks.slice(0, 3).map((task) => (
          <TooltipProvider key={task.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className={`text-xs p-1 rounded truncate ${
                    task.completed 
                      ? "bg-green-500/20 text-green-500" 
                      : "bg-blue-500/20 text-blue-500"
                  }`}
                >
                  {task.title}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <div className="font-medium">{task.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {task.projectName}
                  </div>
                  {task.description && (
                    <div className="text-xs">{task.description}</div>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        
        {tasks.length > 3 && (
          <Badge variant="outline" className="text-xs w-full justify-center">
            +{tasks.length - 3} more
          </Badge>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;
