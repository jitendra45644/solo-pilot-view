
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import { mockProjects } from "@/data/mockData";
import { Project, Status } from "@/types";
import EditableField from "@/components/common/EditableField";
import TechStack from "@/components/common/TechStack";
import TaskChecklist from "@/components/tasks/TaskChecklist";
import { toast } from "sonner";

const statusOptions: { value: Status; label: string }[] = [
  { value: "planned", label: "Planned" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "on-hold", label: "On Hold" },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const foundProject = mockProjects.find(p => p.id === id);
    setProject(foundProject || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="container max-w-4xl mx-auto px-4 py-8">Loading...</div>;
  }

  if (!project) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-xl font-medium mb-2">Project not found</p>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleFieldUpdate = (field: keyof Project, value: any) => {
    setProject(prev => {
      if (!prev) return prev;
      
      const updated = {
        ...prev,
        [field]: value,
        updatedAt: new Date().toISOString(),
      };
      
      toast.success(`Project ${field} updated!`);
      return updated;
    });
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          to="/dashboard" 
          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <EditableField
                value={project.name}
                onChange={(value) => handleFieldUpdate("name", value)}
                className="text-3xl font-bold px-0 py-0"
              />
            </h1>
            
            <Select
              value={project.status}
              onValueChange={(value) => handleFieldUpdate("status", value)}
            >
              <SelectTrigger className="w-[140px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-2">Description</h2>
            <EditableField
              value={project.description}
              onChange={(value) => handleFieldUpdate("description", value)}
              multiline
              className="w-full"
              placeholder="Add project description..."
            />
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-2">Tech Stack</h2>
            <TechStack
              techStack={project.techStack}
              onChange={(techStack) => handleFieldUpdate("techStack", techStack)}
            />
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-2">Tasks</h2>
            <div className="bg-secondary/20 rounded-lg p-4">
              <TaskChecklist
                tasks={project.tasks}
                onChange={(tasks) => handleFieldUpdate("tasks", tasks)}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-secondary/20 rounded-lg p-4 space-y-4">
            <h2 className="text-lg font-medium">Project Links</h2>
            
            <div>
              <label className="text-sm text-muted-foreground">GitHub URL</label>
              <EditableField
                value={project.githubUrl || ""}
                onChange={(value) => handleFieldUpdate("githubUrl", value)}
                placeholder="Add GitHub URL..."
              />
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:underline mt-2"
                >
                  <Github className="h-3.5 w-3.5 mr-1" />
                  View Repository
                </a>
              )}
            </div>
            
            <div>
              <label className="text-sm text-muted-foreground">Deployment URL</label>
              <EditableField
                value={project.deploymentUrl || ""}
                onChange={(value) => handleFieldUpdate("deploymentUrl", value)}
                placeholder="Add deployment URL..."
              />
              {project.deploymentUrl && (
                <a 
                  href={project.deploymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-primary hover:underline mt-2"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  View Deployment
                </a>
              )}
            </div>
          </div>
          
          <div className="bg-secondary/20 rounded-lg p-4 space-y-2">
            <h2 className="text-lg font-medium">Project Info</h2>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Created</span>
              <span className="text-sm">
                {new Date(project.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Last Updated</span>
              <span className="text-sm">
                {new Date(project.updatedAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Tasks</span>
              <span className="text-sm">
                {project.tasks.filter(t => t.completed).length}/{project.tasks.length} completed
              </span>
            </div>

            <Separator className="my-2" />
            
            <div className="flex justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link to="/calendar">
                  <Calendar className="h-4 w-4 mr-1" />
                  View in Calendar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
