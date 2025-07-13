import type React from "react"
import type { Metadata } from "next"
import { Inter, Inter_Tight } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "CroweOS Systems – Mycology & Laboratory Management",
  description: "Integrated Mycology & Lab Management powered by Crowe Logic AI.",
  openGraph: {
    title: "CroweOS Systems – Mycology & Laboratory Management",
    description: "Integrated Mycology & Lab Management powered by Crowe Logic AI.",
    url: "https://croweos.vercel.app", // Replace with your actual URL
    siteName: "CroweOS Systems",
    images: [
      {
        url: "/og-image.png", // It's good practice to have an OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-ivory font-sans text-charcoal antialiased dark:bg-charcoal dark:text-ivory",
          inter.variable,
          interTight.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
