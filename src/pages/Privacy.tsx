import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import logo from "@/assets/netvisor-logo.png";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </a>
          </Button>
          
          <div className="flex items-center gap-2">
            <img src={logo} alt="NetVisor" className="w-8 h-8" />
            <h1 className="font-display text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NetVisor
            </h1>
          </div>

          <div className="w-24" />
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  NetVisor ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our network discovery and documentation service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Information We Collect</h2>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Email address when you sign up for our service or newsletter</li>
                    <li>Account credentials and profile information</li>
                    <li>Network configuration data you choose to upload or scan</li>
                    <li>Communications with our support team</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Log data including IP addresses, browser type, and operating system</li>
                    <li>Usage data and analytics about how you interact with our service</li>
                    <li>Device information and unique identifiers</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground">We use the collected information to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your network scanning and documentation requests</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access, update, or delete your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services for analytics, hosting, and email delivery. These services have their own privacy policies and we encourage you to review them.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us through our{" "}
                  <a href="https://github.com/mayanayza/netvisor/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    GitHub repository
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
