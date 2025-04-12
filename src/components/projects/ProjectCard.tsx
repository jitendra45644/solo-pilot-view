
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project, Status } from "@/types";
import { Calendar, ExternalLink, Github } from "lucide-react";

const statusColors: Record<Status, string> = {
  "planned": "bg-blue-500/20 text-blue-500 border-blue-500/20",
  "in-progress": "bg-amber-500/20 text-amber-500 border-amber-500/20",
  "completed": "bg-green-500/20 text-green-500 border-green-500/20",
  "on-hold": "bg-gray-500/20 text-gray-500 border-gray-500/20"
};

const statusLabels: Record<Status, string> = {
  "planned": "Planned",
  "in-progress": "In Progress",
  "completed": "Completed",
  "on-hold": "On Hold"
};

const ProjectCard = ({ project }: { project: Project }) => {
  const completedTasks = project.tasks.filter(task => task.completed).length;
  const totalTasks = project.tasks.length;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{project.name}</CardTitle>
          <Badge variant="outline" className={`${statusColors[project.status]}`}>
            {statusLabels[project.status]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 my-3">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.techStack.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          <span>
            {totalTasks > 0 
              ? `${completedTasks}/${totalTasks} tasks completed`
              : "No tasks yet"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link 
          to={`/projects/${project.id}`}
          className="text-sm text-primary hover:underline"
        >
          View details
        </Link>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.deploymentUrl && (
            <a href={project.deploymentUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
