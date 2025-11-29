import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import logo from "@/assets/netvisor-logo.png";

const Terms = () => {
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
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using NetVisor ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  NetVisor is a network discovery and documentation platform that helps users automatically scan, visualize, and document their network infrastructure. The Service is provided on an "as is" and "as available" basis.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">User Accounts</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>When you create an account with us, you must:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide accurate, complete, and current information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Promptly update any changes to your account information</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Acceptable Use</h2>
                <p className="text-muted-foreground">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Use the Service for any illegal or unauthorized purpose</li>
                  <li>Scan networks that you do not own or have explicit permission to scan</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use the Service to transmit malware or harmful code</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Remove or modify any proprietary notices or labels</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and its original content, features, and functionality are owned by NetVisor and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. Our open-source components are licensed under their respective licenses as specified in the repository.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">User Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to the network data you scan and store using our Service. We claim no intellectual property rights over the material you provide. By using the Service, you grant us the right to process your data solely for the purpose of providing the Service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, NetVisor shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service is provided "as is" without warranties of any kind, whether express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free, or that any defects will be corrected.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us through our{" "}
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

export default Terms;
