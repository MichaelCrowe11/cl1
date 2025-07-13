"use client"

import { motion } from "framer-motion"
import { Zap, Scale, BarChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const solutions = [
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "No more spreadsheet chaos",
    description: "Centralize all your batch logs and data in one intuitive, searchable platform.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Real-time bio-intelligence",
    description: "Get sensor-driven alerts and AI-powered insights to optimize your yields.",
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: "Scale without contamination",
    description: "Our adaptive SOP engine helps you maintain quality and consistency as you grow.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProblemSolution() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full border-charcoal/10 bg-white/50 text-center shadow-sm transition-all hover:shadow-md dark:border-ivory/10 dark:bg-charcoal/50">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {solution.icon}
                  </div>
                  <CardTitle className="font-display text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal/80 dark:text-ivory/80">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
