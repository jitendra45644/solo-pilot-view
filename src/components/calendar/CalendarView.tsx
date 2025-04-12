
import { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameMonth } from "date-fns";
import { Button } from "@/components/ui/button";
import { Task, TaskWithProject } from "@/types";
import { mockProjects } from "@/data/mockData";
import CalendarDay from "./CalendarDay";

const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  
  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  
  const tasksWithDates: TaskWithProject[] = mockProjects.flatMap(project => 
    project.tasks
      .filter(task => task.dueDate)
      .map(task => ({
        ...task,
        projectId: project.id,
        projectName: project.name
      }))
  );

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          <span>Calendar</span>
        </h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="min-w-28 text-center">
            {format(currentMonth, "MMMM yyyy")}
          </div>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-sm font-medium p-2">
            {day}
          </div>
        ))}
        
        {days.map((day) => {
          const dayTasks = tasksWithDates.filter(
            task => task.dueDate && format(new Date(task.dueDate), "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
          );
          
          return (
            <CalendarDay
              key={day.toString()}
              date={day}
              isCurrentMonth={isSameMonth(day, monthStart)}
              tasks={dayTasks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
