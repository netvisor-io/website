import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import logo from "@/assets/netvisor-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="NetVisor" className="w-8 h-8" />
            <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NetVisor
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Services
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Pricing
            </a>
            <a
              href="https://github.com/mayanayza/netvisor#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              Docs
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1"
              title="Join our Discord"
            >
              <MessageSquare className="w-4 h-4" />
              Discord
            </a>
          </div>

          <Button size="sm" asChild>
            <a href="#newsletter">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <Hero />
      
      <div id="features">
        <Features />
      </div>

      <Testimonials />
      
      <Pricing />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Index;
