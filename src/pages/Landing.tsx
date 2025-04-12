
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Github, Layers, Terminal } from "lucide-react";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border/40">
        <div className="container flex h-16 items-center px-4 sm:px-8 md:px-12">
          <div className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            ProjectPilot
          </div>
          <div className="ml-auto">
            <Button asChild variant="outline" className="mr-2">
              <Link to="/dashboard">Demo</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 px-6 container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-pulse-slow">
            Track Your Projects with Ease
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12">
            The minimal personal project tracker for solo developers and indie hackers. Organize your ideas, track progress, and ship your projects faster.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="https://github.com/username/projectpilot" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Features</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/20 p-4 rounded-full mb-6">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Project Dashboard</h3>
                <p className="text-muted-foreground">
                  Visualize all your projects in one place with status tracking and quick access to important details.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/20 p-4 rounded-full mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Task Management</h3>
                <p className="text-muted-foreground">
                  Keep track of project tasks with simple checklists and due dates to ensure steady progress.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/20 p-4 rounded-full mb-6">
                  <Terminal className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tech Stack Tracking</h3>
                <p className="text-muted-foreground">
                  Tag projects with technologies used and maintain links to GitHub repositories and deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 container mx-auto text-center">
          <div className="bg-secondary/30 rounded-2xl p-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to organize your projects?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Stop losing track of your work. Get started with ProjectPilot today.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/dashboard">Start Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 ProjectPilot. Built for solo developers and indie hackers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
