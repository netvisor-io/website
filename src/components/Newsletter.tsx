import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with your Plunk API key
      const PLUNK_API_KEY = "YOUR_PLUNK_API_KEY";
      
      const response = await fetch("https://api.useplunk.com/v1/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${PLUNK_API_KEY}`,
        },
        body: JSON.stringify({
          event: "newsletter-signup",
          email: email,
          subscribed: true,
        }),
      });

      if (response.ok) {
        setSubscribed(true);
        toast({
          title: "Success!",
          description: "You've been added to the waitlist. We'll be in touch soon!",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {subscribed ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl">
                You're on the list!
              </h2>
              <p className="text-xl text-secondary-foreground/80">
                We'll let you know when NetVisor is ready to transform your network documentation.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Early Access</span>
                </div>
                
                <h2 className="font-display text-4xl md:text-5xl">
                  Get Started with NetVisor
                </h2>
                
                <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
                  Join the waitlist to be among the first to experience automated network discovery
                </p>
              </div>

              <form 
                onSubmit={handleSubmit} 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 backdrop-blur border-secondary-foreground/20 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated hover:shadow-glow transition-smooth"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>

              <p className="text-sm text-secondary-foreground/60">
                We respect your privacy. No spam, ever.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
