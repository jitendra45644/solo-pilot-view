
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import TechStack from "@/components/common/TechStack";
import { Project, Status } from "@/types";
import { mockProjects } from "@/data/mockData";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

const statusOptions: { value: Status; label: string }[] = [
  { value: "planned", label: "Planned" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "on-hold", label: "On Hold" },
];

const NewProject = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("planned");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [githubUrl, setGithubUrl] = useState("");
  const [deploymentUrl, setDeploymentUrl] = useState("");
  
  const handleCreateProject = () => {
    if (!name.trim()) {
      toast.error("Project name is required");
      return;
    }
    
    const newProject: Project = {
      id: uuidv4(),
      name: name.trim(),
      description: description.trim(),
      status,
      techStack,
      tasks: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    if (githubUrl) newProject.githubUrl = githubUrl;
    if (deploymentUrl) newProject.deploymentUrl = deploymentUrl;
    
    // In a real app, this would be an API call
    // Here we'll just simulate adding to the mock data
    mockProjects.push(newProject);
    
    toast.success("Project created successfully!");
    navigate(`/projects/${newProject.id}`);
  };
  
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link 
          to="/dashboard" 
          className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </Link>
      </div>
      
      <div className="bg-card/50 border border-border/50 rounded-lg p-6 backdrop-blur-sm">
        <h1 className="text-2xl font-bold mb-6">Create New Project</h1>
        
        <div className="space-y-6">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Project Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter project name"
              className="w-full"
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter project description"
              className="w-full min-h-[100px]"
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="status" className="text-sm font-medium">
              Status
            </label>
            <Select value={status} onValueChange={(value) => setStatus(value as Status)}>
              <SelectTrigger>
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
          
          <div className="grid gap-2">
            <label className="text-sm font-medium">
              Tech Stack
            </label>
            <TechStack 
              techStack={techStack} 
              onChange={setTechStack} 
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="github" className="text-sm font-medium">
              GitHub URL
            </label>
            <Input
              id="github"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/project"
              className="w-full"
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="deployment" className="text-sm font-medium">
              Deployment URL
            </label>
            <Input
              id="deployment"
              value={deploymentUrl}
              onChange={(e) => setDeploymentUrl(e.target.value)}
              placeholder="https://yourproject.com"
              className="w-full"
            />
          </div>
          
          <div className="flex justify-end gap-4 pt-4">
            <Button variant="outline" onClick={() => navigate("/dashboard")}>
              Cancel
            </Button>
            <Button onClick={handleCreateProject}>
              Create Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
