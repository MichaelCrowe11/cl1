import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
  ]

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
  ]

  return (
    <footer className="bg-ivory-darker dark:bg-charcoal-darker border-t border-primary/10">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Image src="/logo-full-transparent.png" alt="CroweOS Systems Logo" width={140} height={35} />
            </Link>
            <p className="text-sm text-charcoal/70 dark:text-ivory/70">© 2025 Crowe Logic™. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-charcoal/70 transition-colors hover:text-primary dark:text-ivory/70"
                prefetch={false}
                aria-label={`Follow on ${link.href}`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
