"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

const footerLinks = {
  divisions: [
    { label: "Talent Division", href: "#talent" },
    { label: "Solutions Division", href: "#solutions" },
    { label: "Our Process", href: "#process" },
    { label: "Impact", href: "#impact" },
  ],
  talent: [
    { label: "Mentorship Programs", href: "#" },
    { label: "Career Support", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Join Program", href: "#" },
  ],
  solutions: [
    { label: "Web Development", href: "#" },
    { label: "MVP Development", href: "#" },
    { label: "Automation", href: "#" },
    { label: "Start a Project", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold tracking-tighter">
                  Next<span className="text-accent">Geneers</span>
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed max-w-xs mb-8">
                Engineering the next generation of tech talent while delivering 
                innovative solutions to industry.
              </p>
              
              {/* Newsletter */}
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 bg-secondary/30 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <button className="h-12 px-4 bg-foreground text-background hover:bg-foreground/90 transition-colors">
                  <ArrowUpRight className="size-5" />
                </button>
              </div>
            </div>

            {/* Links columns */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Divisions</h4>
              <ul className="space-y-4">
                {footerLinks.divisions.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Talent</h4>
              <ul className="space-y-4">
                {footerLinks.talent.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Solutions</h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            © {new Date().getFullYear()} NextGeneers. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Terms
            </Link>
            
            {/* Social links */}
            <div className="flex items-center gap-2 ml-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="size-8 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="size-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
