
export type Status = 'planned' | 'in-progress' | 'completed' | 'on-hold';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: Status;
  githubUrl?: string;
  deploymentUrl?: string;
  techStack: string[];
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
}

export interface TaskWithProject extends Task {
  projectId: string;
  projectName: string;
}
