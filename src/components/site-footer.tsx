import Link from "next/link";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-4 text-gradient">SPEION</h3>
          <p className="text-sm text-muted">
            Premium digital agency building experiences that drive business growth.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="#services" className="hover:text-foreground transition-colors">Website Development</Link></li>
            <li><Link href="#services" className="hover:text-foreground transition-colors">Logo Design</Link></li>
            <li><Link href="#services" className="hover:text-foreground transition-colors">Brand Identity</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link href="#addons" className="hover:text-foreground transition-colors">Add-ons</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </Container>
      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Speion. All rights reserved.</p>
      </div>
    </footer>
  );
}
