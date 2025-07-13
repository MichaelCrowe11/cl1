"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const tiers = [
  {
    name: "Starter",
    price: "$99",
    description: "For small labs and startups getting organized.",
    features: ["Up to 5 users", "Core batch tracking", "Basic reporting", "Community support"],
  },
  {
    name: "Pro",
    price: "$249",
    description: "For growing labs that need advanced tools.",
    features: ["Up to 20 users", "CroweLayer™ Tagging", "AI Contamination Triage", "Priority support"],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations with custom needs.",
    features: [
      "Unlimited users",
      "Regenerative OKR Dashboard",
      "API Access & Integrations",
      "Dedicated Account Manager",
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tighter sm:text-4xl">Find the Right Plan</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/80 dark:text-ivory/80">
            Simple, transparent pricing that scales with you.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-12 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={cardVariants}>
              <Card
                className={`flex h-full flex-col ${
                  tier.isPopular
                    ? "border-primary shadow-primary/20 shadow-lg"
                    : "border-charcoal/10 dark:border-ivory/10"
                }`}
              >
                <CardHeader>
                  <CardTitle className="font-display text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.name !== "Enterprise" && (
                      <span className="text-sm text-charcoal/70 dark:text-ivory/70">/mo</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
