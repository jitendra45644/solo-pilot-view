
import { Project } from "../types";

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "ProjectPilot",
    description: "A project management tool for solo developers and indie hackers.",
    status: "in-progress",
    githubUrl: "https://github.com/username/projectpilot",
    deploymentUrl: "https://projectpilot.app",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    tasks: [
      {
        id: "task-1",
        title: "Design landing page",
        description: "Create a hero section with CTA",
        completed: true,
      },
      {
        id: "task-2",
        title: "Build dashboard",
        description: "Implement project list with filtering",
        completed: false,
        dueDate: "2025-04-20",
      },
      {
        id: "task-3",
        title: "Add authentication",
        description: "Set up Supabase auth",
        completed: false,
        dueDate: "2025-04-25",
      }
    ],
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-04-10T14:30:00Z",
  },
  {
    id: "2",
    name: "AI Writing Assistant",
    description: "An AI-powered tool for helping writers improve their content.",
    status: "planned",
    githubUrl: "https://github.com/username/ai-writer",
    techStack: ["Next.js", "OpenAI", "Tailwind CSS"],
    tasks: [
      {
        id: "task-1",
        title: "Research API options",
        description: "Compare OpenAI and Anthropic APIs",
        completed: true,
      },
      {
        id: "task-2",
        title: "Create project structure",
        description: "Set up Next.js app with Tailwind",
        completed: false,
        dueDate: "2025-04-30",
      }
    ],
    createdAt: "2025-04-05T09:20:00Z",
    updatedAt: "2025-04-05T09:20:00Z",
  },
  {
    id: "3",
    name: "E-commerce Dashboard",
    description: "Analytics dashboard for online stores.",
    status: "completed",
    githubUrl: "https://github.com/username/ecom-dash",
    deploymentUrl: "https://ecom-dash.vercel.app",
    techStack: ["React", "Chart.js", "Node.js", "MongoDB"],
    tasks: [
      {
        id: "task-1",
        title: "Design UI mockups",
        completed: true,
      },
      {
        id: "task-2",
        title: "Implement charts",
        completed: true,
        dueDate: "2025-03-15",
      },
      {
        id: "task-3",
        title: "Connect to database",
        completed: true,
        dueDate: "2025-03-20",
      },
      {
        id: "task-4",
        title: "Deploy to Vercel",
        completed: true,
        dueDate: "2025-03-25",
      }
    ],
    createdAt: "2025-02-10T11:30:00Z",
    updatedAt: "2025-03-25T16:45:00Z",
  },
  {
    id: "4",
    name: "Personal Blog",
    description: "My technical blog for sharing insights and tutorials.",
    status: "on-hold",
    githubUrl: "https://github.com/username/blog",
    deploymentUrl: "https://myblog.dev",
    techStack: ["Astro", "MDX", "Tailwind CSS"],
    tasks: [
      {
        id: "task-1",
        title: "Set up Astro",
        completed: true,
      },
      {
        id: "task-2",
        title: "Design blog template",
        completed: true,
      },
      {
        id: "task-3",
        title: "Write first article",
        completed: false,
        dueDate: "2025-05-10",
      }
    ],
    createdAt: "2025-03-01T08:15:00Z",
    updatedAt: "2025-04-02T19:20:00Z",
  }
];
